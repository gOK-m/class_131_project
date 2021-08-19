img = "";
status = "";
function preload(){
    img = "mouse.jpg";
}

function setup(){
    canvas = creatCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#00ff00");
    text("dog", 150, 75);
    stroke("#b30000");
    noFill();
    rect(30, 60, 302, 350);
}