import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import arrow from '../../assets/images/icon-arrow.svg';

const Wrapper = styled.div`
    position: relative;
    padding: var(--spacing_x2) var(--spacing_x5);
    padding-right: calc(var(--spacing_x8) + var(--spacing_x6));
    font-size: var(--font_lg);
    border-radius: ${({$isOpen}) => $isOpen ? 'var(--border-radius-sm) var(--border-radius-sm) 0 0': 'var(--border-radius-sm)'};
    background: var(--color-white);
    color: #818181;
    width: 100%;
    translate: border-radius 0.2s;
    cursor: pointer;
`; 

const Postfix = styled.div`
    position: absolute;
    top: 50%;
    right: var(--spacing_x4);
    width: ${({$ratio}) => $ratio * 25}px;
    height: ${({$ratio}) => $ratio * 15}px;
    background: url(${arrow}) no-repeat center center;
    background-size: cover;
    transition: transform 0.3s;
    transform: translateY(-50%) ${({$isOpen}) => $isOpen ? 'rotate(180deg)' : ''};
`;

const List = styled(motion.div)`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    color: #818181;
    border-top: 1px solid #D9D9D9;
    z-index: 10;
`;

const Option = styled.div`
    padding: var(--spacing_x2) var(--spacing_x5);
    font-size:var(--font_xs);
    cursor: pointer;

    & + & {
        border-top: 1px solid #D9D9D9;
    }
`;

export const Select = ({onChoose, options, placeholder, ...props}) => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const ratio = useSizeRatio();

    const handleChoose = (e, id, name) => {
        e.stopPropagation();
        onChoose?.(id, name);
        setValue(name);
        setIsOpen(false);
    };

    return (
        <Wrapper {...props} onClick={() => setIsOpen(prev => !prev)} $ratio={ratio} $isOpen={isOpen}>
            {value ? 
                <span>{value}</span> : <span>{placeholder}</span>
            }
            <Postfix $isOpen={isOpen} $ratio={ratio}/>
            <AnimatePresence>
                {
                    isOpen && (
                        <List
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {options.map(({id, name}) => (
                                <Option key={id} onClick={(e) => handleChoose(e, id, name)} $ratio={ratio}>{name}</Option>
                            ))}
                        </List>
                    )
                }
            </AnimatePresence>
        </Wrapper>
    )
}