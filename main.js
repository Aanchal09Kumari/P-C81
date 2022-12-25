var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="black";
ctx.linewidth=1;
ctx.rect(175,200,430,200);
ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.linewidth=5;
    ctx.arc(275,275,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.linewidth="5";
    ctx.arc(375,275,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.linewidth="5";
    ctx.arc(475,275,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.linewidth="5";
    ctx.arc(325,325,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.linewidth="5";
    ctx.arc(425,325,40,0,2*Math.PI);
    ctx.stroke();