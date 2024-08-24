import { useProgress } from "../../../contexts/ProgressContext"
import { Button } from "../Button";

export const Game = () => {
    const { next } = useProgress();
    return (
        <div>
            <Button onClick={() => next()}>Далее</Button>
        </div>
    )
}