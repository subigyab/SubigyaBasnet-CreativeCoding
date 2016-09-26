/**
* Kevin's comments:  Nice work!  one thing I would say is in the future think about your variable names
* and try to use names that are more descriptive and less generic than a-j.  If someone else is reading your code
* you want to make it as easy as possible for them to read and understand what you're doing.
* keep up the good work!
*/
var a = 170;
var b = 100;
var c = 100;
var d = 990;
var e = 100;
var f = 990;
var g = 800;
var h = 1400;
var i = 800;
var j = 1400;
function setup() {
  createCanvas(1920,1080);
  
}

function draw() {
  //rect(a,100,350,700);
    while (a<520) {
      line(a,100,a,800);
      a=a+350/44;
    }
  
  //rect(580,100,350,700);
    while (b<800){
      line(580,b,930,b);
      b = b + 700/92;
    }
  
  //rect(990,100,350,700);
  if (c<=800 && d<=1300){
    line(990,c,d,100);  
    c=c+10.77;
    d=d+10.77;
  }
  if (c<=800 && d>1300){
    line(990,c,1300,e);
    c=c+10.77;
    e=e+10.77;
  }
  if (c>800 && d>1300){
    while (f<=1300){
      line (f,800,1300,e);
      f=f+10.77;
      e=e+10.77;
    }
  }
  //rect(1400,100,350,700);
  if (g>100 && h<1750){
    line (1400,g,h,800);
    g=g-10.77;
    h=h+10.77;
  }
  if (g>100 && h>1750){
    line (1400,g,1750,i);
    i=i-10.77;
    g=g-10.77;
    }
  
  if (g<100 && h>1750){
    while (i>=100){
    line (j,100,1750,i);
    i=i-10.77;
    j=j+10.77;
    }
  }
  
  
}
