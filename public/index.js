// Importar la librería Three.js
import * as THREE from './three.js';
import * as THREELoader from './three-loader.js'

async function start(){
  // Configurar la escena, la cámara y el renderizador
  const scene = new THREE.Scene();
  
  // Agregar luces
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  // Importar el model1.obj
  let loader = new THREELoader.OBJLoader();
  let model1 = await loader.loadAsync("./models/model1.obj");
  console.log(model1);
  scene.add(model1);

  // Posicionar la cámara
  camera.position.z = 5;
  
  // Función de renderizado
  const animate = () => {
    requestAnimationFrame(animate);
    
    //Rotar model1
    model1.rotation.x += 0.005;
    model1.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  
  // Llamar a la función de renderizado por primera vez
  animate();
}

start();