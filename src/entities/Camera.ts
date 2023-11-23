import { PerspectiveCamera } from "three"

export class Camera extends PerspectiveCamera {

    constructor(fov: number = 75, aspect: number = 1.7, near: number = 0.1, far: number = 15) {
        super(fov,aspect,near,far);
        
    }
}