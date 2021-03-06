
function Pipe(distance) {
    this.top = random(height/2);
    this.bottom = height - this.top - distance;
    this.x = width;
    this.w = 80;
    this.speed = 8;


    this.show = function() {
        fill(255);
        if (this.highlight) {
            fill("red");
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w){
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
}
