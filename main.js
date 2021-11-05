rightwristX=0;
rightwristY=0;
rightwristscore=0;
function preload() {
    canvas=createCanvas(500,300);
    canvas.center();
	video=createCapture(VIDEO);
	video.size(500,300);
canvas.parent("MyCanvas");

    
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose', gotPoses);
}
function draw(){
 image(video,0,0,500,300);
 if (rightwristscore>0.2)
 {
	 fill("blue");
	 stroke("blue");
	 circle(rightwristx,rightwristY,200)
 }
}
function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
	if  (results.length>0){
		console.log(results);
		rightwristX=results[0].pose.rightWrist.x;
		rightwristY=results[0].pose.rightWrist.y;
		rightwristscore=results[0].pose.keypoints[10].score;
	}
}
