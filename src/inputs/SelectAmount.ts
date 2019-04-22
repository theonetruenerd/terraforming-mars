
import { PlayerInput } from "../PlayerInput";
import { PlayerInputTypes } from "../PlayerInputTypes";

export class SelectAmount implements PlayerInput {
    public inputType: PlayerInputTypes = PlayerInputTypes.SELECT_AMOUNT;
    constructor(
        public title: string,
        public message: string,
        public cb: (amount: number) => PlayerInput | undefined,
        public max: number) {
    }
}
