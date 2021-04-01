const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;


function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();


    crumpledPaper = new Paper(200,450,70);

    

    bin = new Dustbin(1000,580);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    crumpledPaper.display();
   bin.display();
      
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:250,y:-250});
    }
}
