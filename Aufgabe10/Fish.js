var Animation;
(function (Animation) {
    class Fish {
        //Methode move
        move() {
            this.x += Math.random() * 4;
            this.y += Math.random() * 4;
        }
        //Methode draw
        drawFish() {
            Animation.crc2.beginPath();
            Animation.crc2.fillStyle = "RGB(" + this.r + "," + this.g + "," + this.b + ")";
            Animation.ctx.moveTo(this.x, this.y);
            Animation.ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            Animation.crc2.moveTo(this.x, this.y + 20);
            Animation.crc2.lineTo(this.x - 20, this.y + 10);
            Animation.crc2.lineTo(this.x - 25, this.y + 15);
            Animation.crc2.lineTo(this.x - 25, this.y);
            Animation.crc2.lineTo(this.x - 20, this.y + 5);
            Animation.crc2.lineTo(this.x, this.y);
            Animation.ctx.stroke();
            Animation.ctx.fill();
            Animation.crc2.closePath();
        }
    }
    Animation.Fish = Fish;
})(Animation || (Animation = {}));
//# sourceMappingURL=Fish.js.map