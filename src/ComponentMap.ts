import {ComponentType} from "./components/ComponentType";
import {IComponent} from "./components/IComponent";

export class ComponentMap {
    private readonly components: Map<ComponentType,IComponent>;

    constructor() {
        this.components = new Map<ComponentType, IComponent>()
    }

    add(component: IComponent,...rest: IComponent[]){
        const c = new Set([component,...rest]);
        for (const component of c) {
            this.components.set(component.$type,component)
        }
    }

    get<T extends IComponent>(type: ComponentType): T | undefined {
        return this.components.has(type) ? this.components.get(type)! as T : undefined;
    }

    types(): Array<ComponentType> {
        return Array.from(this.components.keys())
    }
}