var last_postion_of_x,last_postion_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line= 1;
var width = screen.width;
new_width = screen.width-100;
new_height = screen.height-200;
if(width < 992){
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line");
last_postion_of_x = e.touches[0].clientX-canvas.offsetLeft;
last_postion_of_y = e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
console.log("my_touchMove")
current_postion_of_touch_x = e.clientX-canvas.offsetLeft;
current_postion_of_touch_y = e.clientY-canvas.offsetTop; 
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last postion of x and y coordinates = ");
console.log("x = " + last_postion_of_x +"y = " + last_postion_of_y);
ctx.moveTo(last_postion_of_x,last_postion_of_y);
console.log("Current postion of x and y coordinates = ");
console.log("x = " + current_postion_of_touch_x +"y = " + current_postion_of_touch_y);
ctx.lineTo(current_postion_of_touch_x,current_postion_of_touch_y);
ctx.stroke();
}
last_postion_of_x =current_postion_of_touch_x;
last_postion_of_y =current_postion_of_touch_y 
function clearArea(e){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}