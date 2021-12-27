var canvas;function setup(){canvas=createCanvas(windowWidth,windowHeight);canvas.position(0,0);canvas.style('z-index','0');noStroke();fill(0);}
let t=0;function draw(){background(205);t=(t+0.005)%1;translate(width*0.5,height*0.5);let n=round(width*0.06);for(let i=0;i<n;i++){noStroke();fill(0);let q=i/n;let x=lerp(-1,1,q)*width*0.5;let v=createVector(x,50*lerp(-1,1,tease(t+x*0.005,2,0)));thing(v);q=(i+0.5)/n;x=lerp(-1,1,q)*width*0.5;v=createVector(x,50*lerp(-1,1,tease(t+x*0.002,4,0)));thing(v);}}
function thing(v){beginShape();for(let i=0;i<4;i++){let v1=createVector(1,0).rotate((i*TAU)/4);v1.x*=0.15;v1.y=lerp(-1,1,pow_(map(v1.y,-1,1,0,1),2));v1.mult(20);v1.add(v);vert(v1);}
endShape(CLOSE);}
function vert(v){vertex(v.x,v.y,v.z);}
function pwynt(v){point(v.x,v.y,v.z);}
function llin(v1,v2){line(v1.x,v1.y,v1.z,v2.x,v2.y,v2.z);}
function pow_(p,g){return 1-pow(1-p,g);}
function rotX(v,th){return createVector(v.x,v.y*cos(th)-v.z*sin(th),v.y*sin(th)+v.z*cos(th));}
function rotY(v,th){return createVector(v.x*cos(th)+v.z*sin(th),v.y,v.z*cos(th)-v.x*sin(th));}
function rotZ(v,th){return createVector(v.x*cos(th)-v.y*sin(th),v.x*sin(th)+v.y*cos(th),v.z);}
function ease(p,g){if(p<0.5)
return 0.5*pow(2*p,g);else
return 1-0.5*pow(2*(1-p),g);}
function tease(p,g,w){if(p<0)p=-p
if(p>1)p=p%1
if(2*p+w<1)
return ease(map(p,0,0.5*(1-w),0,1),g);else if(2*p>1+w)
return ease(map(p,0.5*(1+w),1,1,0),g);else
return 1;}