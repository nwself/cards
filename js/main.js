
$(document).ready(function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas = $("#myCanvas");
    var width = canvas.width();
    var height = canvas.height();

    _.forEach(chance.shuffle(card_files), function (filename) {
        var img = new Image();
        img.onload = function() {
            drawRotatedImage(
                img,
                chance.integer({min: 0, max: width}),
                chance.integer({min: 0, max: height}),
                chance.integer({min: 0, max: 359}));
        }
        img.src = "img/tiny/" + filename;
    });


    var TO_RADIANS = Math.PI/180; 
    function drawRotatedImage(image, x, y, angle) { 
     
        // save the current co-ordinate system 
        // before we screw with it
        context.save(); 
     
        // move to the middle of where we want to draw our image
        context.translate(x, y);
     
        // rotate around that point, converting our 
        // angle from degrees to radians 
        context.rotate(angle * TO_RADIANS);
     
        // draw it up and to the left by half the width
        // and height of the image 
        context.drawImage(image, -(image.width/2), -(image.height/2));
     
        // and restore the co-ords to how they were when we began
        context.restore(); 
    }

});
