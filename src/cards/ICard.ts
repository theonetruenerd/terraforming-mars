
import { AndOptions } from "../inputs/AndOptions";
import { IProjectCard } from "../cards/IProjectCard";
import { PlayerInput } from "../PlayerInput";
import { Player } from "../Player";
import { Game } from "../Game";
import { Tags } from "./Tags";
import { SelectAmount } from "../inputs/SelectAmount";
import { SelectCard } from "../inputs/SelectCard";
import { SelectHowToPay } from "../inputs/SelectHowToPay";
import { SelectPlayer } from "../inputs/SelectPlayer";
import { SelectSpace } from "../inputs/SelectSpace";

export interface IActionCard {
    actionText: string;
    action: (player: Player, game: Game) => AndOptions | SelectAmount | SelectCard<IProjectCard> | SelectHowToPay | SelectPlayer | SelectSpace | undefined;
    canAct: (player: Player, game: Game) => boolean;
}

export interface ICard {
    name: string;
    tags: Array<Tags>;
    text: string;
    description: string;
    play: (player: Player, game: Game) => PlayerInput | undefined;
    actionText?: string;
    action?: (player: Player, game: Game) => AndOptions | SelectAmount | SelectCard<IProjectCard> | SelectHowToPay | SelectPlayer | SelectSpace | undefined;
    canAct?: (player: Player, game: Game) => boolean;
}   
