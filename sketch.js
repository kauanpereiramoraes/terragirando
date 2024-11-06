function setup() {
  createCanvas(1920, 1080,WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(510,602,220); //cor de fundo
  rotateY(millis()/1000) //rotação da terra
  texture(terra); //textura da terra, Imagem.
  sphere(200,220); //esfera 3D
  
  
}
