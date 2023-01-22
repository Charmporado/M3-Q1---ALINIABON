const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Window light
const width = 23;
const height = 8;
const intensity = 8;
const rectLight = new THREE.RectAreaLight( 0xe19a37, intensity,  width, height );
rectLight.position.set( -29.9,25,0 );
rectLight.rotation.set( 2,1,0 );
rectLight.lookAt( 0,20,-3 );
scene.add( rectLight )

// Area Bounced Light
const light = new THREE.AmbientLight( 0xffffff, 0.1 );
light.position.set(0, 30, 0);
scene.add( light );

// Candle Light
const candlelight = new THREE.PointLight(0xffe18f, 0.2);
candlelight.position.set(2.5,16.8,15);
scene.add(candlelight);

// Texture
const floorTexture = new THREE.TextureLoader().load('assets/textures/floor_texture.jpg');
const wallTexture = new THREE.TextureLoader().load('assets/textures/wall.jpg');
const outsideTexture = new THREE.TextureLoader().load('assets/textures/outside.jpg');
const woodTexture = new THREE.TextureLoader().load('assets/textures/wood.jpg');
const tableTexture = new THREE.TextureLoader().load('assets/textures/table.jpg');
const carpetTexture = new THREE.TextureLoader().load('assets/textures/carpet.jpg');
const chairTexture = new THREE.TextureLoader().load('assets/textures/chair.jpg');

// Materials
const floorMat= new THREE.MeshPhysicalMaterial({map:floorTexture});
const carpetMat = new THREE.MeshPhysicalMaterial({map:carpetTexture});
const refMat = new THREE.MeshPhysicalMaterial({color:0xffffff});
const wallMat = new THREE.MeshPhysicalMaterial({map:wallTexture});
const wood = new THREE.MeshPhysicalMaterial({map:woodTexture});
const tableMat = new THREE.MeshPhysicalMaterial({map:tableTexture});
const handleMat = new THREE.MeshPhysicalMaterial({color:0x1a1a1a});
const chairMat = new THREE.MeshPhysicalMaterial({map:chairTexture});
const chairlegMat = new THREE.MeshLambertMaterial({color:0x707070});
const candleHolderMat = new THREE.MeshPhysicalMaterial({color:0x707070});
const candleMat = new THREE.MeshPhysicalMaterial({color:0xffffff});
const outsideMat = new THREE.MeshBasicMaterial({map:outsideTexture});
const flameMat = new THREE.MeshBasicMaterial({color:0xe16a37});

// Floor
const floorGeo = new THREE.BoxGeometry(70,1, 65);
const floor = new THREE.Mesh( floorGeo, floorMat );
floor.position.set(5,0,-3);
scene.add(floor);

// Window
const windowFGeo = new THREE.BoxGeometry(2,10,25);
const windowF = new THREE.Mesh(windowFGeo, wood);
windowF.position.set(-30,25,0);
scene.add(windowF);

const stick1Geo = new THREE.BoxGeometry(1,10,1);
const stick1 = new THREE.Mesh(stick1Geo, wood);
stick1.position.set(-29,25,0);
scene.add(stick1);

const stick2Geo = new THREE.BoxGeometry(1,1,25);
const stick2 = new THREE.Mesh(stick2Geo, wood);
stick2.position.set(-29,25,0);
scene.add(stick2);

const outsideGeo = new THREE.BoxGeometry(2,8,23);
const outside = new THREE.Mesh(outsideGeo, outsideMat);
outside.position.set(-29.9,25,0);
scene.add(outside);

// Carpet
const carpetGeo = new THREE.CircleGeometry( 20, 20 );
const carpet = new THREE.Mesh( carpetGeo, carpetMat );
carpet.position.set(2,2,13);
carpet.rotation.set(4.7, 0, 0);
scene.add( carpet );

// Wall
const wallGeo = new THREE.BoxGeometry(70, 40, 1);
const wall = new THREE.Mesh(wallGeo, wallMat);
wall.position.set(5,20,-35);
scene.add(wall);

// Wall Left
const wallLGeo = new THREE.BoxGeometry(1, 40, 65);
const wallL = new THREE.Mesh(wallLGeo, wallMat);
wallL.position.set(-30,20,-3);
scene.add(wallL);

// Wall Right
const wallRGeo = new THREE.BoxGeometry(1, 40, 65);
const wallR = new THREE.Mesh(wallRGeo, wallMat);
wallR.position.set(40,20,-3);
scene.add(wallR);

// Table
// Table Frame
const tableGeo = new THREE.BoxGeometry(20,2,20);
const table = new THREE.Mesh(tableGeo, tableMat);
table.position.set(2.5,12,15);
scene.add(table);

// Table Leg 1
const leg1Geo = new THREE.BoxGeometry(1,10,1);
const leg1 = new THREE.Mesh(leg1Geo, tableMat);
leg1.position.set(-6.6,7,24);
scene.add(leg1);

// Table Leg 2
const leg2Geo = new THREE.BoxGeometry(1,10,1);
const leg2 = new THREE.Mesh(leg2Geo, tableMat);
leg2.position.set(11.5,7,24);
scene.add(leg2);

// Table Leg 3
const leg3Geo = new THREE.BoxGeometry(1,10,1);
const leg3 = new THREE.Mesh(leg3Geo, tableMat);
leg3.position.set(11.5,7,6);
scene.add(leg3);

// Table Leg 4
const leg4Geo = new THREE.BoxGeometry(1,10,1);
const leg4 = new THREE.Mesh(leg4Geo, tableMat);
leg4.position.set(-6.6,7,6);
scene.add(leg4);

// Candle
const candleHolderGeo = new THREE.BoxGeometry(1,1,1);
const candleHolder = new THREE.Mesh(candleHolderGeo, candleHolderMat);
candleHolder.position.set(2.5,13,15);
scene.add(candleHolder);

const candleGeo = new THREE.BoxGeometry(0.5,3,1);
const candle = new THREE.Mesh(candleGeo, candleMat);
candle.position.set(2.5,15,15);
scene.add(candle);

const flameGeo = new THREE.ConeGeometry(0.3, 0.3, 10);
const flame = new THREE.Mesh(flameGeo, flameMat);
flame.position.set(2.5,16.8,15);
scene.add(flame);

candlelight.target = flame;

// Chair 1
const chairGeo = new THREE.BoxGeometry(6,1,6);
const chair = new THREE.Mesh(chairGeo, chairMat);
chair.position.set(13,9,20);
chair.rotation.set(0, 0, 0);
scene.add(chair);

const chairLeg1Geo = new THREE.BoxGeometry(0.5,6,1);
const chairLeg1 = new THREE.Mesh(chairLeg1Geo, chairlegMat);
chairLeg1.position.set(16,6,15);
scene.add(chairLeg1);

const chairLeg2Geo = new THREE.BoxGeometry(0.5,6,1);
const chairLeg2 = new THREE.Mesh(chairLeg2Geo, chairlegMat);
chairLeg2.position.set(16,6,20);
scene.add(chairLeg2);

const chairLeg3Geo = new THREE.BoxGeometry(0.5,6,1);
const chairLeg3 = new THREE.Mesh(chairLeg3Geo, chairlegMat);
chairLeg3.position.set(11,6,20);
scene.add(chairLeg3);

const chairLeg4Geo = new THREE.BoxGeometry(0.5,6,1);
const chairLeg4 = new THREE.Mesh(chairLeg4Geo, chairlegMat);
chairLeg4.position.set(11,6,15);
scene.add(chairLeg4);

// Chair 2
const chair2Geo = new THREE.BoxGeometry(6,1,6);
const chair2 = new THREE.Mesh(chair2Geo, chairMat);
chair2.position.set(-8.2,9,20);
chair2.rotation.set(0, 0, 0);
scene.add(chair2);

const chair2Leg1Geo = new THREE.BoxGeometry(0.5,6,1);
const chair2Leg1 = new THREE.Mesh(chair2Leg1Geo, chairlegMat);
chair2Leg1.position.set(-6,6,15);
scene.add(chair2Leg1);

const chair2Leg2Geo = new THREE.BoxGeometry(0.5,6,1);
const chair2Leg2 = new THREE.Mesh(chair2Leg2Geo, chairlegMat);
chair2Leg2.position.set(-6,6,20);
scene.add(chair2Leg2);

const chair2Leg3Geo = new THREE.BoxGeometry(0.5,6,1);
const chair2Leg3 = new THREE.Mesh(chair2Leg3Geo, chairlegMat);
chair2Leg3.position.set(-11,6,20);
scene.add(chair2Leg3);

const chair2Leg4Geo = new THREE.BoxGeometry(0.5,6,1);
const chair2Leg4 = new THREE.Mesh(chair2Leg4Geo, chairlegMat);
chair2Leg4.position.set(-11,6,15);
scene.add(chair2Leg4);

// Counters
const counter1Geo = new THREE.BoxGeometry(55,1,10);
const counter1 = new THREE.Mesh(counter1Geo, wood);
counter1.position.set(13,14,-31);
scene.add(counter1);

const counter2Geo = new THREE.BoxGeometry(10,1,55);
const counter2 = new THREE.Mesh(counter2Geo, wood);
counter2.position.set(35,14,-15);
scene.add(counter2);

// Cabinet

const cabinetGeo = new THREE.BoxGeometry(52,15,8);
const cabinet = new THREE.Mesh(cabinetGeo, wood);
cabinet.position.set(13,6,-30);
scene.add(cabinet);

const cabinet2Geo = new THREE.BoxGeometry(8,15,52);
const cabinet2 = new THREE.Mesh(cabinet2Geo, wood);
cabinet2.position.set(35,6,-15);
scene.add(cabinet2);

// Fridge
const refGeo = new THREE.BoxGeometry(14,27,10);
const ref = new THREE.Mesh(refGeo, refMat);
ref.position.set(35,12,18);
scene.add(ref);

const freezerGeo = new THREE.BoxGeometry(1,8,8);
const freezer = new THREE.Mesh(freezerGeo, refMat);
freezer.position.set(28,21,18);
scene.add(freezer);

const refDGeo = new THREE.BoxGeometry(1,14,8);
const refDoor = new THREE.Mesh(refDGeo, refMat);
refDoor.position.set(28,9,18);
scene.add(refDoor);

const handle1Geo = new THREE.BoxGeometry(1,1.5,1);
const handle1 = new THREE.Mesh(handle1Geo, handleMat);
handle1.position.set(27.5,21,16);
scene.add(handle1);

// Camera
// Default (1, 20, 100), (3,20,-30)
camera.position.set(1, 20, 100);
camera.lookAt(3,20,-30);

// Animate
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();