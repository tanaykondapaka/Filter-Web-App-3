var noseX=0;
var noseY=0;
var i1=0
var i2=0
var i3=0
var i4=0
var x=0;
var i=0;
function preload(){
img1=loadImage("mustache.png");
img2=loadImage("nose.png");
img3=loadImage("lips.png");
img4=loadImage("rabbit.png");
}
function image1(){
   document.getElementById("img1").style.backgroundColor="#445a79"   
   i1=1
   document.getElementById("img2").style.backgroundColor="#568679" 
   i2=0
      document.getElementById("img3").style.backgroundColor="#568679" 
      i3=0
      document.getElementById("img4").style.backgroundColor="#568679" 
i4=0
   
}
function image2(){
    i1=0
    i2=1
    i3=0
    i4=0
    document.getElementById("img2").style.backgroundColor="#445a79"   
    document.getElementById("img1").style.backgroundColor="#568679" 
       document.getElementById("img3").style.backgroundColor="#568679" 
       document.getElementById("img4").style.backgroundColor="#568679"  
}
function image3(){
    i1=0
    i2=0
    i3=1
    i4=0
    document.getElementById("img3").style.backgroundColor="#445a79"   
    document.getElementById("img2").style.backgroundColor="#568679" 
       document.getElementById("img1").style.backgroundColor="#568679" 
       document.getElementById("img4").style.backgroundColor="#568679"
}
function image4(){
    i1=0
    i2=0
    i3=0
    i4=1
    document.getElementById("img4").style.backgroundColor="#445a79"   
    document.getElementById("img2").style.backgroundColor="#568679" 
       document.getElementById("img3").style.backgroundColor="#568679" 
       document.getElementById("img1").style.backgroundColor="#568679"
}
function image11(){
    if(i1==0){
    document.getElementById("img1").style.backgroundColor="#d6d7dc" }

}
function image22(){
    if(i2==0){
    document.getElementById("img2").style.backgroundColor="#d6d7dc" }

}
function image33(){
    if(i3==0){
    document.getElementById("img3").style.backgroundColor="#d6d7dc" }

}
function image44(){
    if(i4==0){
    document.getElementById("img4").style.backgroundColor="#d6d7dc" }

}
function image111(){
    if(i1==0){
    document.getElementById("img1").style.backgroundColor="#568679" }

}
function image222(){
    if(i2==0){
    document.getElementById("img2").style.backgroundColor="#568679" }

}
function image333(){
    if(i3==0){
    document.getElementById("img3").style.backgroundColor="#568679" 
}
}
function image444(){
    if(i4==0){
    document.getElementById("img4").style.backgroundColor="#568679" 
    }
}
function setup(){
canvas=createCanvas(466,294.5)
canvas.position(270, 172)
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
console.log(poseNet)
poseNet.on("pose", gotPoses);

}
function gotPoses(results,error){
if(error){
    console.log(error,"error")
}
else{
    if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y}
}
}
function modelLoaded(){
    console.log("model has been loaded!")
    
}

function draw(){
image(video,16.25,0,450,294.5)
if(i1==1){image(img1,noseX-125,noseY-100,100, 100)}
if(i2==1){image(img2,noseX-125,noseY-100,100, 80)}
if(i3==1){image(img3,noseX-100,noseY-60,50, 40)}
if(i4==1){image(img4,noseX-125,noseY-80,100, 50)}
}


function save_pic(){
save("Filter_Pic")
}