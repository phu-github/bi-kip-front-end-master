$(function(event) {
    //Menu
    console.log( "ready!" );
    //input setup
    var input = {
        mouseX: {
        start: 0,
        end: window.innerWidth,  // chiều rộng màn hình
        current: 0,
        },
        mouseY: {
        start: 0,
        end: window.innerHeight, // chiều cao màn hình
        current: 0,
        },
    };
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log("=====input====", input);
    console.log("=====coords====", coords);

});
