var font;
var vehicules = [];
var canvas;
function preload() {
    font = loadFont('./p5/steeringBehaviour/black.ttf');
}

function setup() {
    var canvas = createCanvas(1500, 500);


    // stringToShow, distance to left, distance to, size of string
    var points = font.textToPoints('GAME', 150, 300, 300 );
    console.log(points);

    for (var i=0; i< points.length; i++) {
        var pt = points[i];
        var vehicule = new Vehicule(pt.x, pt.y);
        vehicules.push(vehicule);
//        stroke(255);
//        strokeWeight(8);
//        point(pt.x, pt.y);
    }
    canvas.parent('sketch-holder');
}

function draw() {
    background(0);
    for (var i = 0; i< vehicules.length;i++) {
        var v = vehicules[i];
        v.behaviours();
        v.update();
        v.show();
    }
}

function keyPressed() {

}
