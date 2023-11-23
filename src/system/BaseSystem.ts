import { IComponent } from "../components/IComponent";

export interface IBaseSystem<T extends IComponent> {
    update(components: Array<T>): void
    type: string;
}