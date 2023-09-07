import*as THREE from 'three';import{OrbitControls}from 'three/addons/controls/OrbitControls.js';import{Cube}from 'cube'
let line,renderer,scene,camera,controls,container;let line1;let matLine,matLineBasic,matLineDashed;let gui;let bg_grid_size,bg_dim;let t,global_scale,global_scroll_amt;const frustumSize=50;const special_constant=0.6154797086703873410674645891239936;let cube,bg_spheres;init();animate();function init(){t=0;bg_grid_size=12;update_global_scale();global_scroll_amt=0.0;container=document.getElementById('canvasthreejs');renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(window.devicePixelRatio);renderer.setClearColor(0x000000,0.0);renderer.setSize(window.innerWidth,window.innerHeight);container.appendChild(renderer.domElement);scene=new THREE.Scene();scene.add(new THREE.AmbientLight(0xffffff));const aspect=window.innerWidth/window.innerHeight;camera=new THREE.OrthographicCamera(frustumSize*aspect/-2,frustumSize*aspect/2,frustumSize/2,frustumSize/-2,0.1,130);camera.position.set(0,0,60);controls=new OrbitControls(camera,renderer.domElement);controls.minDistance=10;controls.maxDistance=500;controls.zoomSpeed=0.7;controls.enableZoom=true;controls.enablePan=false;controls.enableRotate=false;controls.listenToKeyEvents(window);controls.mouseButtons={MIDDLE:THREE.MOUSE.DOLLY,LEFT:THREE.MOUSE.PAN,RIGHT:THREE.MOUSE.ROTATE}
controls.touches={ONE:THREE.TOUCH.PAN,TWO:THREE.TOUCH.DOLLY_PAN}
controls.keys={RIGHT:'ArrowLeft',BOTTOM:'ArrowUp',LEFT:'ArrowRight',UP:'ArrowDown'}
controls.keyPanSpeed=20;init_background();cube=new Cube(scene);cube.make_new_cube();cube.global_scale=global_scale;scene.add(cube.object);for(let point of cube.points){scene.add(point);}
window.addEventListener('resize',onWindowResize);document.addEventListener('click',onClick);onWindowResize();}
function init_background(){bg_spheres=[]
let m=bg_grid_size;for(let i=-m;i<m+1;i++)
for(let j=-m;j<m+1;j++)
if(in_grid(i,j,m)){let v=global_transform(new THREE.Vector3(i,0,j));v=scrolling(v);v.z=-50;const geometry=new THREE.SphereGeometry(0.2,10,10);const material=new THREE.MeshBasicMaterial({color:window.getComputedStyle(document.body,null).getPropertyValue('--primary-noalpha')});const sphere=new THREE.Mesh(geometry,material);sphere.position.set(v.x,v.y,v.z);bg_spheres.push(sphere);scene.add(sphere);}
let bound_max=new THREE.Vector2(Math.max(...bg_spheres.map(s=>s.position.x)),Math.max(...bg_spheres.map(s=>s.position.y)));let bound_min=new THREE.Vector2(Math.min(...bg_spheres.map(s=>s.position.x)),Math.min(...bg_spheres.map(s=>s.position.y)));bg_dim=bound_max.sub(bound_min);}
function in_grid(i,j,rad){return-j<1+i+rad&&(j-rad-1)<-i;}
function transform(v){let amt=1;return rotX(rotY(v,Math.PI*0.25*amt),-special_constant*amt);}
function untransform(v){let amt=1;return rotY(rotX(v,special_constant*amt),-Math.PI*0.25*amt);}
function global_transform(v){return transform(v.multiplyScalar(global_scale));}
function grid_to_isom(v){let amt=1;let C1=Math.cos(-Math.PI*0.25*amt);let S12=Math.sin(-Math.PI*0.25*amt)*Math.sin(-special_constant*amt);let C2=Math.cos(-special_constant*amt);return new THREE.Vector3(C1*v.x,+S12*v.x+C2*v.y);}
function isom_to_grid(v){let amt=1;let C1=cos(-Math.PI*0.25*amt);let S12=sin(-Math.PI*0.25*amt)*sin(-special_constant*amt);let C2=cos(-special_constant*amt);return new PVector(v.x/C1,(-S12*v.x/C1/C2+v.y/C2));}
function scrolling(v){return v;}
function rotX(v,th){return v.applyAxisAngle(new THREE.Vector3(1,0,0),th);}
function rotY(v,th){return v.applyAxisAngle(new THREE.Vector3(0,1,0),th);}
function rotZ(v,th){return v.applyAxisAngle(new THREE.Vector3(0,0,1),th);}
function onWindowResize(){const aspect=window.innerWidth/window.innerHeight;camera.left=-frustumSize*aspect/2;camera.right=frustumSize*aspect/2;camera.top=frustumSize/2;camera.bottom=-frustumSize/2;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight);}
function onClick(){let col=window.getComputedStyle(document.body,null).getPropertyValue('--primary-noalpha');if(bg_spheres[0].material.color!=col){cube.update_cols();for(let sphere of bg_spheres)
sphere.material.color.set(col);}}
function update_global_scale(){global_scale=0.5*0.2*Math.sqrt(window.innerWidth*window.innerWidth+window.innerHeight*window.innerHeight)/(2*bg_grid_size+1);}
function animate(){if(cube.t>cube.duration){for(let point of cube.points)
scene.remove(point);cube.make_new_cube();for(let point of cube.points)
scene.add(point);}
cube.update();requestAnimationFrame(animate);renderer.setClearColor(0x000000,0);renderer.setViewport(0,0,window.innerWidth,window.innerHeight);renderer.render(scene,camera);}