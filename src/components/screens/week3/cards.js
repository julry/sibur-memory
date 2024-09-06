import engenier31 from '../../../assets/images/engenier31.png';
import operator3 from '../../../assets/images/operator3.png';
import engenier312 from '../../../assets/images/engenier312.png';
import pilot3 from '../../../assets/images/pilot3.png';
import defect3 from '../../../assets/images/defect3.png';
import energetic3 from '../../../assets/images/energetic3.png';
import slesar from '../../../assets/images/slesar.png';
import device3 from '../../../assets/images/device3.png';
import water32 from '../../../assets/images/water32.png';
import emissions from '../../../assets/images/emissions.png';
import trees32 from '../../../assets/images/trees32.png';
import greenPrize from '../../../assets/images/greenPrize.png';
import invest from '../../../assets/images/invest.png';
import edu32 from '../../../assets/images/edu32.png';
import wastes from '../../../assets/images/wastes.png';
import greenhouse from '../../../assets/images/greenhouse.png';
import age33 from '../../../assets/images/age33.png';
import boddy33 from '../../../assets/images/boddy33.png';
import career33 from '../../../assets/images/career33.png';
import directions33 from '../../../assets/images/directions33.png';
import enterprises33 from '../../../assets/images/enterprises33.png';
import goods3 from '../../../assets/images/goods3.png';
import women33 from '../../../assets/images/women33.png';
import young33 from '../../../assets/images/young33.png';

export const cards31 = [
    { 
        imageName: 'card-3-1', 
        name: 'first', 
        id: 'first', 
        image: engenier312, 
        infoText: 'Инженер-технолог — специалист, который занимается контролем различных производственных процессов, например, разработкой полимеров.',
    },
    { 
        imageName: 'card-3-2', 
        name: 'second', 
        id: 'second', 
        image: device3, 
        infoText: 'Аппаратчики работают в самом центре предприятия у оборудования, которое производит сырьё, и контролируют весь процесс.'
    },
    { 
        imageName: 'card-3-3', 
        name: 'third', 
        id: 'third', 
        image: defect3, 
        infoText: 'Дефектоскописты проводят техническое обслуживание всех аппаратов предприятия.'
    }, 
    { 
        imageName: 'card-3-4', 
        name: 'fourth', 
        id: 'fourth', 
        image: slesar, 
        infoText: 'Слесари бывают разные, но в основном они занимаются ремонтом оборудования предприятия.'
    },
    { 
        imageName: 'card-3-5', 
        name: 'fifth', 
        id: 'fifth', 
        image: energetic3, 
        infoText: 'Энергетики занимаются бесперебойной подачей тепла во все помещения предприятия.'
    }, 
    { 
        imageName: 'card-3-6', 
        name: 'sixth', 
        id: 'sixth', 
        image: pilot3, 
        infoText: 'Пилоты дронов по камерам наблюдают за объектами, недоступными человеческому зрению. Например, ' + 
        'дрон оценивает состояние трубопровода в лесах Сибири или состояние колонны пиролиза на высоте более ' +
        '100 метров.'
    }, 
    { 
        imageName: 'card-3-7', 
        name: '7th', 
        id: '7th', 
        image: operator3,
        infoText: 'Операторы технологических установок занимаются регулированием процессов на промышленном оборудовании ' +
        'для настройки оптимального режима изготовления сырья.',
    }, 
    { 
        imageName: 'card-3-8', 
        name: '8th', 
        id: '8th', 
        image: engenier31,
        infoText: 'Что самое важное в работе инженеров сервисных служб?',
        isTask: true,
        buttons: [
            {
                text: 'Знать все',
                isCorrect: false,
                answerText: 'Не совсем. Узнать все необходимое ты сможешь на обучении в компании. От работы инженера сервисных служб зависит функционирование всего предприятия. Поэтому ему необходимо очень оперативно решать проблему, если она возникает.'
            },
            {
                text: 'Быстрая реакция',
                isCorrect: true,
                answerText: 'Именно так! Узнать все необходимое ты сможешь на обучении в компании. От работы инженера сервисных служб зависит функционирование всего предприятия. Поэтому ему необходимо очень оперативно решать проблему, если она возникает.'
            }
        ]
    }, 
];

export const cards32 = [
{ 
    imageName: 'card-3-1', 
    name: 'first', 
    id: 'first', 
    image: water32, 
    infoText: 'В 2023 СИБУР уменьшил количество воды, необходимой на производстве, на 1,4 млн куб. м. Сокращение потребления воды вносит большой вклад в улучшение экологической обстановки.'
},
{ 
    imageName: 'card-3-2', 
    name: 'second', 
    id: 'second', 
    image: emissions, 
    infoText: 'За прошлый год  в СИБУР на 8% снизили объём выбросов загрязняющих веществ в атмосферу.'
},
{ 
    imageName: 'card-3-3', 
    name: 'third', 
    id: 'third', 
    image: wastes,
    infoText: 'В экологические процессы компании входит обезвреживание отходов производства.'
}, 
{ 
    imageName: 'card-3-4', 
    name: 'fourth', 
    id: 'fourth', 
    image: edu32,
    infoText: 'Компания разработала образовательную программу, которую используют для экологического просвещения. ' +
    'Она называется «Вторая жизнь пластика» — спецпроект, который помогает научиться разумному потреблению. пластика». ' +
    'Более 10 000 педагогов по всей стране провели уроки по нашей программе в своих школах!'
},
{ 
    imageName: 'card-3-5', 
    name: 'fifth', 
    id: 'fifth',  
    image: invest,
    infoText: 'В11,6 миллиардов рублей СИБУР направил на защиту окружающей среды в 2023 году.'
},
{ 
    imageName: 'card-3-6', 
    name: 'sixth', 
    id: 'sixth', 
    image: greenhouse,
    infoText: 'За год компания СИБУР сократила объём прямых выбросов парниковых газов в атмосферу на 25%.'
}, 
{ 
    imageName: 'card-3-7', 
    name: '7th', 
    id: '7th', 
    image: greenPrize,
    infoText: 'Компания СИБУР получила первое место на Зелёной премии ' +
    'за пластиковую упаковку Vivilen, созданную с применением вторичных полимеров.'
}, 
{ 
    imageName: 'card-3-8', 
    name: '8th', 
    id: '8th', 
    image: trees32,
    infoText: 'Сколько деревьев СИБУР посадил в рамках программы «Зеленая формула» за последние 3 года?',
    isTask: true,
    buttons: [
        {
            text: 'около 3 млн',
            isCorrect: false,
            answerText: 'Больше! Компания посадила более 4 миллионов деревьев.'
        },
        {
            text: 'более 4 млн',
            isCorrect: true,
            answerText: 'Да! Компания посадила более 4 миллионов деревьев.'
        }
    ]
}, 
];

export const cards33 = [
    { 
        imageName: 'card-3-1', 
        name: 'first', 
        id: 'first', 
        image: age33, 
        infoText: 'Чуть меньше 30% сотрудников компании моложе 30 лет.'
    },
    { 
        imageName: 'card-3-2', 
        name: 'second', 
        id: 'second', 
        image: boddy33,
        infoText: 'К каждому стажёру прикрепляется наставник, чтобы адаптация в компании прошла комфортно и легко.'
    },
    { 
        imageName: 'card-3-3', 
        name: 'third', 
        id: 'third', 
        image: young33,
        infoText: 'Каждый год СИБУР принимает на работу около 2000 молодых специалистов.'
    }, 
    { 
        imageName: 'card-3-4', 
        name: 'fourth', 
        id: 'fourth', 
        image: goods3,
        infoText: 'СИБУР производит сырьё для различной продукции: от кроссовок и пластиковых карт до презервативов.'
    },
    { 
        imageName: 'card-3-5', 
        name: 'fifth', 
        id: 'fifth', 
        image: directions33,
        infoText: 'В СИБУРе можно попасть не только на производственные вакансии. Сотрудников ищут и в другие ' + 
        'направления: в науку, диджитал и строительство.'
    },
    { 
        imageName: 'card-3-6', 
        name: 'sixth', 
        id: 'sixth', 
        image: women33,
        infoText: 'Доля женщин в численности персонала СИБУРа превышает 30%, что сопоставимо с показателями ведущих промышленных компаний РФ.'
    }, 
    { 
        imageName: 'card-3-7', 
        name: '7th', 
        id: '7th', 
        image: career33,
        infoText: 'Сотрудница СИБУРа Анастасия Синицына сделала 6 карьерных шагов за 8 лет: ' + 
        'со стажёрской позиции она доросла до руководителя направления..'
    }, 
    { 
        imageName: 'card-3-8', 
        name: '8th', 
        id: '8th', 
        image: enterprises33,
        infoText: 'Где находится самое восточное предприятие СИБУРа?',
        isTask: true,
        buttons: [
            {
                text: 'Магадан',
                isCorrect: false,
                answerText: 'Нет! Самое восточное предприятие — Амурский газохимический комплекс — находится в Благовещенске.'
            },
            {
                text: 'Благовещенск',
                isCorrect: true,
                answerText: 'Да! Самое восточное предприятие — Амурский газохимический комплекс — находится в Благовещенске.'
            }
        ]
    }, 
];