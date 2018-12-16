alert('Решение систем линейных уравнений методом Крамера'); 

var m00 = document.getElementById("m00"); 
var m10 = document.getElementById("m10"); 
var m20 = document.getElementById("m20"); 

var m01 = document.getElementById("m01"); 
var m11 = document.getElementById("m11"); 
var m21 = document.getElementById("m21"); 

var m02 = document.getElementById("m02"); 
var m12 = document.getElementById("m12"); 
var m22 = document.getElementById("m22"); 

var d0 = document.getElementById("d0"); 
var d1 = document.getElementById("d1"); 
var d2 = document.getElementById("d2"); 


var button = document.getElementById("button"); 


var matrix = [ 
    [], 
    [], 
    [] 
]; 

m = matrix; 

var freeVariables = []; 

fv = freeVariables; 

 
function delta(m00, m01, m02, m10, m11, m12, m20, m21, m22) { 
      d = ((m00 * m11 * m22) + (m01 * m12 * m20) + (m10 * m21 * m02)) -
          ((m02 * m11 * m20) + (m00 * m12 * m21) + (m01 * m10 * m22)) 

    return d 
} 


/* 

a1 =(00); b1 =(01); c1 =(02); d1 =(03)
a2 =(10); b2 =(11); c2 =(12); d2 =(13) 
a3 =(20); b3 =(21); c3 =(22); d3 =(23) 
*/ 



button.addEventListener("click", function(){ 
  m[0][0] = m00.value; 
  m[1][0] = m10.value; 
  m[2][0] = m20.value; 

  m[0][1] = m01.value; 
  m[1][1] = m11.value; 
  m[2][1] = m21.value; 

  m[0][2] = m02.value; 
  m[1][2] = m12.value; 
  m[2][2] = m22.value; 

  fv[0] = d0.value; 
  fv[1] = d1.value; 
  fv[2] = d2.value;  


d = delta(m[0][0], m[0][1], m[0][2], m[1][0], m[1][1], m[1][2], m[2][0], m[2][1], m[2][2]); 


deltaX = delta(fv[0], m[0][1], m[0][2], fv[1], m[1][1], m[1][2], fv[2], m[2][1], m[2][2]); 

deltaY = delta(m[0][0], fv[0], m[0][2], m[1][0], fv[1], m[1][2], m[2][0], fv[2], m[2][2]); 

deltaZ = delta(m[0][0], m[0][1], fv[0], m[1][0], m[1][1], fv[1], m[2][0], m[2][1], fv[2]); 



var x = deltaX/d; 

var y = deltaY/d; 

var z = deltaZ/d; 

alert('x = ' + x + ' y = ' + y + ' z = ' + z); 

});











