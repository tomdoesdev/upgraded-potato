import { ComponentType } from "../components/ComponentType";
import { IComponent } from "../components/IComponent";
import {EntityId} from "../EntityComponentContainer";
import {ComponentMap} from "../ComponentMap";

export interface IEntity {
    $id: EntityId
    components: ComponentMap
}