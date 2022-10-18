    //Grab the canvas element on the client 
    // and get the context to add stuff to the canvas
    var canvas = document.getElementById("myCanvas");
    var CanvasContext = canvas.getContext("2d");

    //Since we are going to use the line 
    // to draw the entire logo, set up
    // some properties to get the right width
    // color, the cap and join style 
    CanvasContext.lineWidth = 50;
    CanvasContext.strokeStyle = "#F6FD04";
    CanvasContext.lineCap = "square";
    CanvasContext.lineJoin = "round";  

    //Through out our drawing process we will just
    // call the moveTo method in case we want draw 
    // things that do not connect, and just call the
    // lineTo so that the drawing operation takes place
    // when we call the stroke method

    //Draw the "i" dot
    CanvasContext.moveTo(50, 50);
    CanvasContext.lineTo(50, 52);

    //Draw line on the left
    CanvasContext.moveTo(50, 130);
    CanvasContext.lineTo(50, 200);

    //Draw the base line
    CanvasContext.lineTo(220, 200);

    //Change the line join to get a square edge
    // at the bottom right and then switch back to round
    CanvasContext.lineJoin = "round";
    CanvasContext.stroke();
    CanvasContext.lineJoin = "round";

    //Draw line on the right
    CanvasContext.lineTo(220, 50);

    //Draw the top line
    CanvasContext.lineTo(120, 50);

    //Change the line join to get a square edge
    // at the top left
    CanvasContext.lineJoin = "round";
    CanvasContext.stroke();

    //Draw the "G" edge
    CanvasContext.lineTo(120, 150);

    //Finally, call the stroke method so that 
    // all the remaining drawing can be completed
    CanvasContext.stroke();