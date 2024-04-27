var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var color = "black";
var mouse_e ="empty";
var x,y;
var width = 1;
var ancho = screen.width;
var n_ancho = screen.width-200;
var n_alto = screen.height-400;

if (ancho<992){
  document.getElementById("can").width=n_ancho;
  document.getElementById("can").height=n_alto;
  document.body.style.overflow = "hidden";
}


//ctx.beginPath();
//ctx.strokeStyle=color;
//ctx.lineWidth= 5;
//ctx.arc(200, 200, 50 ,0 , 2 * Math.PI);
//ctx.stroke();
canvas.addEventListener("touchstart",my_touchS);
function my_touchS(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
     console.log(color);
     x= e.touches[0].clientX-canvas.offsetLeft;
     y= e.touches[0].clientY-canvas.offsetTop;
     // mouse_x = e.clientX - canvas.offsetLeft;
     // mouse_y = e.clientY - canvas.offsetTop;
      //console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    //   circle(mouse_x , mouse_y);
}
function erase() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }//
//GNEISS
canvas.addEventListener("touchmove", my_touchM);
 function my_touchM(e)
 {
  //current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  //current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  xA= e.touches[0].clientX-canvas.offsetLeft;
     yA= e.touches[0].clientY-canvas.offsetTop;

  
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;

  console.log("La última posición de las coordenadas x, y = ");
  console.log("x = " + x + "y = " 
       + y);
  ctx.moveTo(x,y);

  console.log("Posición actual de las coordenadas x, y = ");
  console.log("x  = " + xA + "y = " 
          + yA);
  ctx.lineTo(xA, 
          yA);
  ctx.stroke();
 
  x = xA; 
  y = yA;
  //GNEISS
}


