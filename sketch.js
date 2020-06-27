var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score =0;
var count=0;
var turn=0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}


 
function draw() {
  background("black");
  
  stroke(255,204,0);
  line(0,450,800,450);
  

  textSize(20)
 text("Score : "+score,100,50);
 text("500",25,550);
 text("500",105,550);
 text("500",185,550);
 text("500",265,550);
 text("100",345,550);
 text("100",425,550);
 text("100",505,550);
 text("200",585,550);
 text("200",665,550);
 text("200",750,550);

  Engine.update(engine);
  ground.display();
 
 
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
      }

   
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(particle!=null){
     particle.display(); 
    
     if(particle.body.position.y>760){
          if(particle.body.position.x<=300){
          score = score+500
          
      }
    

     if(particle.body.position.x>=301 && particle.body.position.x<=600){
      score = score+100
         
  }
 

  if(particle.body.position.x>=601 && particle.body.position.x<=900){
  score = score+200
    
  }

  particle=null;  
}

}

if(count>=5){
  gameState = "end";
  text("Game Over",350,420);
}

}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle = new Particle(mouseX,10,10,10);
}
}
  

  


