
difference = 0;
rightwristX = 0;
leftwristX = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    document.getElementById("text_side").innerHTML = "Width and height of the square is  =  " + difference + " px";
    textSize(difference);
    fill('#FFE787');
    text('Han',50,400);
}

function modelloaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWrist = " + leftwristX + " rightWristX = "+ rightwristX + " difference = " + difference);
    }
}