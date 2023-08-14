window.onload = function() {
    // Retrieve the canvas element
    var canvas = document.getElementById("myCanvas");
  
    // Check if the browser supports canvas
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
  
      // Set canvas size
      canvas.width = 800;
      canvas.height = 600;
  
      // Define the sun
      var sun = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 50,
        color: "rgba(255, 223, 0, 1)"
      };
  
      // Define the earth
      var earth = {
        orbitRadius: 200,
        radius: 30,
        color: "rgba(0, 119, 190, 1)",
        angle: 0,
        speed: 0.01
      };
  
      // Animation loop
      function animate() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Draw the sun
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
        ctx.fillStyle = sun.color;
        ctx.shadowColor = "rgba(255, 223, 0, 0.4)";
        ctx.shadowBlur = 50;
        ctx.fill();
  
        // Update the earth's position
        earth.angle += earth.speed;
        var earthX = sun.x + earth.orbitRadius * Math.cos(earth.angle);
        var earthY = sun.y + earth.orbitRadius * Math.sin(earth.angle);
  
        // Draw the earth
        ctx.beginPath();
        ctx.arc(earthX, earthY, earth.radius, 0, 2 * Math.PI);
        ctx.fillStyle = earth.color;
        ctx.shadowColor = "rgba(0, 119, 190, 0.4)";
        ctx.shadowBlur = 20;
        ctx.fill();
  
        // Draw the earth's orbit
        ctx.strokeStyle = "rgba(0, 119, 190, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, earth.orbitRadius, 0, 2 * Math.PI);
        ctx.stroke();
  
        // Request the next animation frame
        requestAnimationFrame(animate);
      }
  
      // Start the animation
      animate();
    }
  };
  