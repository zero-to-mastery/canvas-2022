
  var c = document.getElementById("myCanvas")
  var ctx = c.getContext("2d");

  var centerX = 300, centerY = 300, radius = 250;

  drawHands();
  setInterval(drawHands, 1000);

  // main clock function
  function drawHands(){

      //clearing the previous things
      ctx.clearRect(0, 0, c.width, c.height);

      // drawing the circle
      ctx.lineWidth = 5;
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      // centre dot and eyes
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius/20, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX - radius/2.3 , centerY - radius/2.3, radius/17, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX + radius/2.3,  centerY - radius/2.3, radius/17, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      // draw the smile
      ctx.fillStyle = "white"
      ctx.beginPath();
      ctx.arc(centerX, centerY + 25 , radius/1.6, 0, Math.PI);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      // drawing the numbers
      for (var i = 1; i <= 12; i++){
          ctx.fillStyle = "black";
          ctx.font = "35px courier";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(i, centerX - (radius-35)*Math.cos(i*Math.PI/6 + Math.PI/2), 
                      centerY - (radius-35)*Math.sin(i*Math.PI/6 + Math.PI/2));
      }

      //getting the current time
      var d = new Date();
      var sec = d.getSeconds();
      var min = d.getMinutes();
      var hr = d.getHours();
      var date = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();

      //draw second hand
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX - (radius-15)*Math.cos(sec*Math.PI/30 + Math.PI/2), 
          centerY - (radius-15)*Math.sin(sec*Math.PI/30 + Math.PI/2));
      ctx.stroke();

      //draw minute hand
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX - (radius-45)*Math.cos(min*Math.PI/30 + sec*Math.PI/1800 + 
                      Math.PI/2), 
          centerY - (radius-45)*Math.sin(min*Math.PI/30 + sec*Math.PI/1800 
                      + Math.PI/2));
      ctx.stroke()

      //draw hour hand
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX - (radius-90)*Math.cos(hr*Math.PI/6 
          + min*Math.PI/360 + sec*Math.PI/21600 + Math.PI/2), 
          centerY - (radius-90)*Math.sin(hr*Math.PI/6 + 
          + min*Math.PI/360 + sec*Math.PI/21600 + Math.PI/2));
      ctx.stroke();

      // write date
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "45px arial"
      ctx.fillText(date+" / "+month+" / "+year, centerX, centerY + radius/1.6 - 70)

  }
