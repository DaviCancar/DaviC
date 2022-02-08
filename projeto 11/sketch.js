var player,street,parede_direita,parede_esquerda;
var imgPlayer,imgPath,;


function preload(){ 
imgPlayer = loadImage("Runner-1.png","Runner-2.png");
imgPath = loadimage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  street = createSprite(200,200);
  street.addImage(imgPath);
  street.velocitY = 5;
  street.scale = 1.2;

//criando o menino que corre

player = createSprite(180,340,30,30);
player.scale = 0.08
player.addanimation("boy",imgPlayer);

//criando o limite esquerdo

parede_esquerda = createSprite(0,0,100,800);
parede_esquerda.visible = false;

//criando a parede direita 

parede_direita = createSprite(410,0,100,800);
parede_direita.visible = false;



}

function draw() {
  background(0);

  street.velocitY = 4;

  //menino de movendo no eixo X com o mouse

player.X = World.mouseX;

edges = createEdgeSprite();
player.collide(edges[3]);
player.collide(parede_esquerda);
player.collide(parede_direita);

//codigo para reiniciar o fundo

if(street.y > 400){

street.y = height/2;

}

  drawSprites();

}
