import { InputWatcher } from "../InputWatcher";
import { MovementComponent } from "../components/Movement/Movement";
import { Player } from "../entities/Player";
import { IBaseSystem } from "./BaseSystem";

export class PlayerMovementSystem implements IBaseSystem<MovementComponent> {
    player: Player;
    input: InputWatcher;
    type = "PlayerMovementSystem";

    constructor(player: Player, input: InputWatcher) {
        this.player = player;
        this.input = input;
    }

    update(components: MovementComponent[]): void {
        components.forEach(component => {
            if (this.input.isKeyPressed("KeyD")) {
                component.position.x = 1;
            }

            if (this.input.isKeyPressed("KeyA")) {
                component.position.x = -1;
            }

            if (this.input.isKeyPressed("KeyW")) {
                component.position.y = 1;
            }

            if (this.input.isKeyPressed("KeyS")) {
                component.position.y = -1;
            }
        });
    }
}