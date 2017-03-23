function setup(){
    createCanvas(600,400);
    background(214, 50, 25);
}

function draw(){
    strokeWeight(6);
    stroke(25, 29, 190);
    
    var x = 0;
    while(x<650){
        fill(59, 123, 226)
        ellipse(x + 10,150, 25, 100);
        x = x + 50;
    }
   
   for(var x = 0; x < 650; x = x + 15){
       fill(18, 79, 61);
       rect(x + 25,x,45,50);
    }
}