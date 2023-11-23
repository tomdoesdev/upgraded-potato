import * as THREE from 'three';
import { Vector3 } from 'three';
import {InputWatcher} from './InputWatcher'
import { Player } from './entities/Player';
import {EntityComponentContainer} from "./EntityComponentContainer";
import {MovementComponent} from "./components/Movement/Movement";
import {IMovement} from "./components/Movement/IMovement";
import {debug} from "./Logger";
import {KeyboardInput} from "./components/KeyboardInput/KeyboardInput";
import {CameraComponent} from "./components/Camera.component";


const Input = new InputWatcher();

const rayCaster = new THREE.Raycaster();
const ecc = new EntityComponentContainer();

const forwardVec = new THREE.Vector3(0,0,-1),
       sideVec = new THREE.Vector3(1,0,0);

var isJumping = false, isGrounded = true;

const renderer = new THREE.WebGLRenderer({antialias: true});

const scene = new THREE.Scene();

document.body.appendChild(renderer.domElement);

const clock = new THREE.Clock()

const material = new THREE.MeshNormalMaterial();
const boxGeom = new THREE.BoxGeometry(1,1,1);
const cube = new THREE.Mesh(boxGeom, material);
cube.scale.set(1,1,1)
const planeGeom = new THREE.PlaneGeometry(1,2,2);
const plane = new THREE.Mesh(planeGeom,material);



function init() {
    Input.bind();
    ecc.registerEntity(new Player(ecc));


    renderer.setSize(1920,1080);


    plane.rotateX(-THREE.MathUtils.degToRad(90))


    plane.scale.set(100,100,1)  

    cube.position.y += 0.5;
    scene.add(plane);
    scene.add(cube);

    const camera = ecc.entitiesWithComponents(CameraComponent)
    rayCaster.set(camera.position, new Vector3(0,-1,0));
    rayCaster.far = 1.89;

    update();
}

function update(){
    const dt = clock.getDelta();
    requestAnimationFrame(update);

    const comps = ecc.entitiesWithComponents(MovementComponent.Sym);
    for (const comp of comps) {
        const move = comp.components.get<IMovement>(Symbol.for(MovementComponent.Name));
    }
    

    rayCaster.set(camera.position, new Vector3(0,-1,0));
    const planeInter = rayCaster.intersectObject(plane);


    if(Input.isKeyPressed("KeyD")){
        const f = sideVec.clone().applyQuaternion(camera.quaternion).multiplyScalar(3*dt);
        camera.position.add(f)
    }

    if(Input.isKeyPressed("KeyA")){
        const f = sideVec.clone().applyQuaternion(camera.quaternion).multiplyScalar(3*dt);
       
        camera.position.sub(f)
    }

    if(Input.isKeyPressed("KeyW")){
        const f = forwardVec.clone().applyQuaternion(camera.quaternion).multiplyScalar(3*dt);
        camera.position.add(f)
    }

    if(Input.isKeyPressed("KeyS")){
        const f = forwardVec.clone().applyQuaternion(camera.quaternion).multiplyScalar(3*dt);
        camera.position.sub(f)
    }

    if(Input.isKeyPressed("KeyQ")){
        camera.rotateY(-3 * dt)
    }

    if(Input.isKeyPressed("KeyE")){
        camera.rotateY(3 * dt)
    }

    if(Input.isKeyPressed("Space")){
        if(!isJumping && isGrounded){
            isJumping = true;
        }
    }

    //   intersect = planeInter.pop();
      
    //   if(intersect !== undefined){
    //         if(isJumping && intersect.distance < 0.8){
    //           camera.position.y += 3 * dt;
    //           isGrounded = false;
    //         }

    //         if(intersect.distance <= 0.3){
    //             isGrounded = true;
    //             isJumping = false;
    //         }
    //     }

    //     if(!isGrounded) {
    //         camera.position.y -= 3 *dt;
    //     }

    render();   
}

function render(){
    renderer.render(scene, camera);
}

init();