leftEarX = 0;
leftEarY = 0;
function preload(){
  mask = loadImage("https://i.postimg.cc/wvLJgpw4/mask-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log('PoseNet Is Initialized');
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    console.log("leftEarX = " + results[0].pose.leftEar.x);
    console.log("leftEarY = " + results[0].pose.leftEar.y);
    leftEarX = results[0].pose.leftEar.x;
    leftEarY = results[0].pose.leftEar.y;
  }
}

function draw(){
image(video,0,0,450,450);
image(mask,leftEarX - 5,leftEarY,150,150);
}

function take_snapshot(){
    save("myfilter.png");
}