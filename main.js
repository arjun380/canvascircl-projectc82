var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";

var wol = 2;

var currentX,currentY,lastX,lastY = "";
mouseEvent = "emppy";
function clearcanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", my_mousedown);



function my_mousedown(e)
{
color = document.getElementById("color").value;
wol = document.getElementById("width_of_line").value;

mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", mouseLeave);

function mouseLeave(e)
{
color = document.getElementById("color").value;
wol = document.getElementById("width_of_line").value;

mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
color = document.getElementById("color").value;
wol = document.getElementById("width_of_line").value;

mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mouse);

function my_mouse(e)
{
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wol;

        console.log("Last position of x and y coordinates =");
        console.log("x = " + lastX + "y = " + lastY );
        ctx.moveTo(lastX, lastY);
        

        console.log("Current position of x and y coordinates =");
        console.log("x = " + currentX + "y = " + currentY );
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;

    lastY = currentY;

    circle(mouse_x , mouse_y);

}

function circle(mouse_X , mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(mouse_x, mouse_y, 40, 0 ,2*Math.PI);
ctx.stroke();
}

function clearcanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
