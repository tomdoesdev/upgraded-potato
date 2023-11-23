import {IComponent} from "./IComponent";
import {ComponentType} from "./ComponentType";
import {EntityComponentContainer} from "../EntityComponentContainer";

export abstract class AbstractComponent implements IComponent {
    readonly $type: ComponentType;
    private ecc: EntityComponentContainer;
    protected constructor(name: string, ecc: EntityComponentContainer) {
        this.ecc = ecc;
        this.$type = Symbol.for(name)
    }

    protected abstract onUpdate(): void;
}