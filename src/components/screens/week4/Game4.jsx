import { cards41 } from "./cards";
import { Game } from "../../shared/Game";

export const Game4 = () => (
    <Game level={1} week={4} initialCards={cards41} points={19} isWrongShuffle isLastLevel/>
)