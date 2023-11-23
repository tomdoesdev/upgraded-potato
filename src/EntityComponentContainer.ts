import {IEntity} from "./entities/IEntity";
import {ComponentType} from "./components/ComponentType";
import {debug, warn} from "./Logger";

export type EntityId = Symbol;
export class EntityComponentContainer {
    private readonly entities: Map<EntityId,IEntity>;
    private readonly componentEntities: Map<ComponentType, Set<EntityId>>
    constructor() {
        this.entities = new Map<EntityId, IEntity>();
        this.componentEntities = new Map<ComponentType, Set<EntityId>>();
    }
    registerEntity(entity: IEntity) {
        const entId = entity.$id;

        this.entities.set(entId,entity);

        for (const componentType of entity.components.types()) {
            if(!this.componentEntities.has(componentType)){
                this.componentEntities.set(componentType,new Set<EntityId>())
            }
            this.componentEntities.get(componentType)?.add(entId);
        }
    }
    entitiesWithComponents(component: ComponentType,...rest: ComponentType[]): Set<IEntity> {
        const componentTypes = new Set([component,...rest])
        const targetCount = componentTypes.size;
        const entityCounts: Map<EntityId, number> = new Map<EntityId, number>();
        const result: Set<IEntity> = new Set<IEntity>();

        /**
         * Check to make sure all the requested components actually have entities attached,
         * otherwise log and early escape.
         */
        for (const componentType of componentTypes){
            if(!this.componentEntities.has(componentType)) {
                warn(`No registered entities for ${componentType} component.`,"entitiesWithComponents");
                return new Set<IEntity>();
            }
        }

        for (const componentType of componentTypes) {
            const entities = this.componentEntities.get(componentType)!;

            for (const entity of entities) {
                if(!entityCounts.has(entity)) {
                    entityCounts.set(entity,0);
                }

                const updatedCount = entityCounts.get(entity)!+1
                entityCounts.set(entity,updatedCount)

                if(updatedCount === targetCount) {
                    if(!this.entities.has(entity)) {
                        console.warn(`No such entity ${entity} is registered`,"entitiesWithComponents");
                        continue;
                    }
                    result.add(this.entities.get(entity)!);
                }
            }
        }
        debug(this.componentEntities)
        debug(this.entities)

        return result;

    }


}