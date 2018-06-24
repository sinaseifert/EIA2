var Animation;
(function (Animation) {
    class Bubble {
        //Methode mo    
        moveBubbles() {
            this.y -= 2; //Math.random() * 700;
            //            this.radius += 1; //+= Math.random() * 10;
        }
        drawBubbles() {
            Animation.ctx.beginPath();
            Animation.crc2.fillStyle = "#BFEFFF";
            Animation.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Animation.crc2.fill();
        }
    }
    Animation.Bubble = Bubble;
})(Animation || (Animation = {}));
//# sourceMappingURL=Bubbles.js.map