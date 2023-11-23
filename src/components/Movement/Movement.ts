import {Vector2, Vector3} from "three";
import { IComponent } from "../IComponent";
import {IMovement} from "./IMovement";
import {AbstractComponent} from "../AbstractComponent";
import {EntityComponentContainer} from "../../EntityComponentContainer";

export class MovementComponent extends AbstractComponent {
    position: Vector3;
    public static readonly Name = 'Component_Movement'
    public static readonly Sym = Symbol.for(MovementComponent.Name);
   constructor(ecc: EntityComponentContainer){
       super(MovementComponent.Name,ecc);
       this.position = new Vector3(0,1,2)
   }
}