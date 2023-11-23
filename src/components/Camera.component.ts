import {IComponent} from "./IComponent";
import {AbstractComponent} from "./AbstractComponent";
import {ComponentType} from "./ComponentType";
import {EntityComponentContainer} from "../EntityComponentContainer";
import {Camera} from "three";

export class CameraComponent extends AbstractComponent {
    public readonly camera: Camera;
    constructor(ecc: EntityComponentContainer) {
        super("Component_Camera",ecc);
        this.camera = new Camera();
    }

    protected onUpdate(): void {
    }

}