import {IEntity} from "./IEntity";
import {EntityComponentContainer, EntityId} from "../EntityComponentContainer";
import {ComponentMap} from "../ComponentMap";

export abstract class AbstractEntity implements IEntity {
    protected ecc: EntityComponentContainer;
    public readonly components: ComponentMap

    $id: EntityId;
    constructor(name: string, ecc: EntityComponentContainer) {
        this.ecc = ecc;
        this.$id = Symbol(name)
        this.components = new ComponentMap()
    }


}