//Grab the canvas element on the client 
    // and get the context to add stuff to the canvas
    var canvas = document.getElementById("myCanvas");
    var canvasContext = canvas.getContext("2d");

    canvasContext.lineWidth = 50;
    canvasContext.strokeStyle = "#F6FD04";
    canvasContext.lineCap = "square";
    canvasContext.lineJoin = "round";  

    //Through out our drawing process we will just
    // call the moveTo method in case we want draw 
    // things that do not connect, and just call the
    // lineTo so that the drawing operation takes place
    // when we call the stroke method

    //Draw the "i" dot at the top left
    canvasContext.moveTo(50, 50);
    canvasContext.lineTo(50, 52);

    //Draw line on the left
    canvasContext.moveTo(50, 130);
    canvasContext.lineTo(50, 200);

    //Draw the base line
    canvasContext.lineTo(220, 200);

    //Change the line join to get a square edge
    // at the bottom right and then switch back to round
    canvasContext.lineJoin = "round";
    canvasContext.stroke();
    canvasContext.lineJoin = "round";

    //Draw line on the right
    canvasContext.lineTo(220, 50);

    //Draw the top line
    canvasContext.lineTo(120, 50);

    //Change the line join to get a square edge
    // at the top left
    canvasContext.lineJoin = "round";
    canvasContext.stroke();

    //Draw the "G" edge
    canvasContext.lineTo(120, 150);

    //Finally, call the stroke method so that 
    // all the remaining drawing can be completed
    canvasContext.stroke();
