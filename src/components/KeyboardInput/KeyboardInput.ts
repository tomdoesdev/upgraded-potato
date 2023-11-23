import {IKeyboardInput} from "./IKeyboardInput";
import {ComponentType} from "../ComponentType";

export class KeyboardInput implements IKeyboardInput {
    static Name: ComponentType = "KeyboardInput";
    $type: ComponentType;
    handleInput() {
    }
}