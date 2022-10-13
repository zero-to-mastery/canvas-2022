// alert("Welcome to Hacktober2022");

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 200, 300);

    ctx.globalAlpha = 0.7;

    ctx.fillStyle = "red";
    ctx.fillRect(200, 200, 200, 300);

    ctx.fillStyle = "green";
    ctx.fillRect(300, 300, 200, 300);


    

});