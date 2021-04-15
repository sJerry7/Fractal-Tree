var angle = 0;
var slider;

function setup(){
    createCanvas(1905,800);
    slider = createSlider(0,TWO_PI , PI/4, 0.01);
}
function draw(){
    background(60);
    angle = slider.value();
    stroke(40,169,40);
    translate(952.5,height);
    branch(200);
}
function branch(len){
    line(0,0,0,-len);
    translate(0,-len);
    if(len>5){
        push();
        rotate(angle);
        branch(len*0.67);
        pop();
        push();
        rotate(-angle);
        branch(len*0.67);
        pop();
}
}

