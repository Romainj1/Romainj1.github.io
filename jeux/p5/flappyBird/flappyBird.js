var bird;
var pipes;
var game;
var distance;
var score;

function init(){
    distance = 200;
    score =0;
    pipes = [];
    // remmove all previous pipes
    for (var i = pipes.length-1 ; i >= 0; i--) {
        pipes.splice(i, 1);
    }
    bird = new Bird();
    game = true;
}

function setup() {
    var canvas = createCanvas(1200, 600);

    canvas.parent('flappyBird');
    init();
}

function draw() {

    background(0);
    if (game){
        bird.update();
        bird.show();
        // hard from 100;
        if (distance > 100){
            distance-= 0.05;
        }
        if (frameCount % 100 == 0) {
            pipes.push(new Pipe(distance));

        }
        for (var i = pipes.length-1 ; i >= 0; i--) {
            pipes[i].show();
            pipes[i].update();

            if (pipes[i].hits(bird)) {
                console.log("HIT")

                game = false;
                textSize(32);
                text('SCORE :', 30, 30);
                text(score, 10, 30);
            } else {
                if (pipes[i].offscreen()) {
                    pipes.splice(i, 1);
                    score += 1;
                }
            }
        }
    } else {
        textSize(100);
        text('GAME OVER', 20, 120);
        textSize(32);
        text('SCORE :', 20, 250, 200);
        text(score, 220, 250);
        text('ENTER RETURN TO PLAY', 20, 350);
    }
}

function keyPressed() {

    if (key == ' ') {
        bird.up();
    }
    if (keyCode === ENTER) {
        init();
    }
}
