
    
    function draw() {
      var canvas = document.getElementById("canvas");
      var i = 0;
      if (canvas.getContext) {
        while (i<1050)
            {
                var ctx = canvas.getContext("2d");

                ctx.fillStyle = '#8b4513';
                ctx.fillRect(0, i, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(150, i, 150, 150);


                ctx.fillStyle = '#8b4513';
                ctx.fillRect(300, i, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(450, i, 150, 150);


                ctx.fillStyle = '#8b4513';
                ctx.fillRect(600, i, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(750, i, 150, 150);

                ctx.fillStyle = '#8b4513';
                ctx.fillRect(900, i, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(1050, i, 150, 150);
                //fin de ligne 

                

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(0, i+150, 150, 150);


                ctx.fillStyle = '#8b4513';
                ctx.fillRect(150, i+150, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(300, i+150, 150, 150);


                ctx.fillStyle = '#8b4513';
                ctx.fillRect(450, i+150, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(600, i+150, 150, 150);

                ctx.fillStyle = '#8b4513';
                ctx.fillRect(750, i+150, 150, 150);

                ctx.fillStyle = 'rgba(250, 250, 190)';
                ctx.fillRect(900, i+150, 150, 150);

                ctx.fillStyle = '#8b4513';
                ctx.fillRect(1050, i+150, 150, 150);
                
                i=i+300;
            }
        
        
      }
    }
  