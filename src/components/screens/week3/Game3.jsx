import { Game } from "../../shared/Game";
import { cards33 } from "./cards";

export const Game33 = () => (
    <Game level={3} week={3} initialCards={cards33} points={13} isLastLevel/>
)