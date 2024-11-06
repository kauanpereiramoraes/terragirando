function setup() {
  createCanvas(400, 400,WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(510,602,220); //cor de fundo
  rotateY(millis()/1000) //rotação da terra
  texture(terra); //textura da terra, Imagem.
  sphere(140,160); //esfera 3D
  
  
}
