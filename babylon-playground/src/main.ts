import "./style.css";
import * as baby from "babylonjs";
// import "babylonjs-viewer";
import "@babylonjs/loaders/glTF";
import { RotationGizmo } from "babylonjs";

// let el = document.querySelector<HTMLDivElement>("#app")!;

const canvas = document.querySelector<HTMLCanvasElement>("#renderCanvas")!; // Get the canvas element
const engine = new baby.Engine(canvas, true); // Generate the BABYLON 3D engine


const createScene = () => {
  const scene = new baby.Scene(engine);

  /**** Set camera and light *****/
  const camera = new baby.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new baby.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);
  const light = new baby.HemisphericLight("light", new baby.Vector3(1, 1, 0), scene);

  const box = baby.MeshBuilder.CreateBox("box", {});
  box.position.y = 0.5;

  const roof = baby.MeshBuilder.CreateCylinder("roof", { diameter: 1.3, height: 1.2, tessellation: 3 });
  roof.scaling.x = 0.75
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22

  const ground = baby.MeshBuilder.CreateGround("ground", { width: 10, height: 10 });
  const groundMat = new baby.StandardMaterial("groundMat");
  groundMat.diffuseColor = new baby.Color3( 0, 1,0);
  ground.material = groundMat

  // const sound = new BABYLON.Sound("name", "./sound/HIGH ROLLER CASINO GIRL!-303652662.mp3", scene, null, { loop: true, autoplay: true });

  return scene;
}

// Add your code here matching the playground format

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});