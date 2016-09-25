/*Create a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n  ap p .j s file , Wri te  a Jav aSc rip t  f unc tio n c alc u lateA rea()  whic h 
takes r a dius  as p ar ameter  an d re tu rns  are a  of c irc le .  Disp lay  the  retur n  val ue i n 
c onsole.
*/

function  calculateArea(radius){ //accepting parameter radius

return 3.14*radius*radius; //returning the area
}


var radius = prompt("Enter radius");
var area = calculateArea(radius); //calling the function and assigning return value to variable called area
console.log(area);