noseX = 0;
noseY = 0;

function preload() {
     clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(550, 250);
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();

    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-40;
      noseY = results[0].pose.nose.y+20 ;
          }
  }
  
function draw() {
    image(video, 0, 0, 600, 500);
    image(clown_nose, noseX, noseY, 80, 35);
    tint(tint_color)

}

function take_snapshot() {
    save('myFilterImage.png');
}


function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}