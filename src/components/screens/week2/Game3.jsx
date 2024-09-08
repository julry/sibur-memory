import { Game } from "../../shared/Game";
import { cards23 } from "./cards";

export const Game23 = () => (
    <Game level={3} week={2} initialCards={cards23} points={13} isLastLevel/>
)