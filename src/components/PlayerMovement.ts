import {IComponent} from "./IComponent";
import {ComponentType} from "./ComponentType";

export class PlayerMovement implements IComponent {
    $type: ComponentType = Symbol.for("Component_PlayerMovement");

}