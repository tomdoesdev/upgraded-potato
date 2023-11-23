import {Vector2, Vector3} from "three";
import {IComponent} from "../IComponent";

export interface IMovement extends IComponent {
    position: Vector3;
}