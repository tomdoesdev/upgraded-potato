import {AbstractComponent} from "./AbstractComponent";
import {Vector3} from "three";
import {EntityComponentContainer} from "../EntityComponentContainer";

export class PositionComponent extends AbstractComponent {
    public readonly position: Vector3;

    constructor(ecc: EntityComponentContainer) {
        super("Component_Position",ecc);
        this.position = new Vector3()
    }

    protected onUpdate(): void {
        return //No-op
    }
}