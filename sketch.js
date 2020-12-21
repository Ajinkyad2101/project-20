var car,wall;
var speed,weight;

function setup(){
  createCanvas(1600,400);

speed=random(50,100);

weight=random(500,1200);

wall=createSprite(1500,200,50,200);

car=createSprite(50,200,50,50);
car.velocityX=speed;


deformation=0.5*weight*speed*speed/22500

}

function draw(){
background("black");

  
if(wall.x-car.x<0&&deformation<80){

  car.velocityX=0;
  car.shapeColor="green";

  }

  if(wall.x-car.x<0&&deformation>180&&deformation>80){

    car.velocityX=0;
    car.shapeColor="yellow";
    
    
    }

    if(wall.x-car.x<0&&deformation>180){

      car.x=1500;
      car.shapeColor="red";
      
      
      }

drawSprites();
}
