function preload(){
    
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,100,80,300,250);

    stroke(247, 218, 27);
    fill(247, 218, 27);
    circle(40,40,55);
    circle(460,40,55);
    circle(40,360,55);
    circle(460,360,55);

    stroke(227, 47, 2);
    fill(227, 47, 2);
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
}
function take_snapshot(){
    save('frame_pic.png');
}