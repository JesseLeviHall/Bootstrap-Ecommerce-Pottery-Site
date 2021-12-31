import * as THREE from '/node_modules/three/build/three.module.js';
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#c'),
});



function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas})};
const fov = 60;
const aspect = 2;  
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();
const sphereTexture = new THREE.TextureLoader().load('/img/textures/corts.jpg');
const normalTexture = new THREE.TextureLoader().load('/img/textures/cC8cS.jpg');
const geometry = new THREE.SphereGeometry(1, 96, 96);
const material = new THREE.MeshPhongMaterial({map: sphereTexture, normalMap: normalTexture});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
renderer.render(scene, camera);



//background
const backGround = new THREE.TextureLoader().load('/img/CortneyFerrari.jpg');
scene.background = backGround;
var c = document.getElementById('c');


//spin
function render(time) {
  time *= 0.0007;  // convert time to seconds
 
  sphere.rotation.x = time;
  sphere.rotation.y = time;
 
  renderer.render(scene, camera);
 
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
{
  const color = 0x0000ff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-2, 4, 8);
  scene.add(light);
  
  const ambientLight = new THREE.AmbientLight(0xe78be7);
scene.add( ambientLight);
}

