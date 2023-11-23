import { Vector2 } from "three";
import { Camera } from "./Camera";
import { IEntity } from "./IEntity";
import { IComponent } from "../components/IComponent";
import { MovementComponent } from "../components/Movement/Movement";
import { ComponentType } from "../components/ComponentType";
import {EntityComponentContainer, EntityId} from "../EntityComponentContainer";
import * as _ from 'remeda';
import {ComponentMap} from "../ComponentMap";
import {CameraComponent} from "../components/Camera.component";
import {AbstractEntity} from "./AbstractEntity";
import {PositionComponent} from "../components/Position.component";



export enum MovementDirection {
    LEFT,
    RIGHT,
    BACK,
    FORWARD
}
export class Player extends AbstractEntity {
    public static readonly $Name = "Entity_Player"
    constructor(ecc: EntityComponentContainer) {
        super("Entity_Player", ecc)
        this.components.add(
            new CameraComponent(ecc),
            new PositionComponent(ecc),
        );

    }



}