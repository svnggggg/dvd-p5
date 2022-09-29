// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

class dvdLogo{
  constructor (pX,pY){
    this.pX = pX
    this.pY = pY
    this.color = [255,255,255]
    this.velX = 3
    this.velY = 4
  }

  show(){
    fill(this.color)
    textStyle(BOLDITALIC)
    textSize(32)
    text("DVD",this.pX,this.pY)
    ellipse(this.pX+32,this.pY+12,80,20)
    fill(0)
    textSize(18)
    text("video",this.pX+6,this.pY+16)
  }

  cambiarColor(){
    this.color = [random(255),random(255),random(255)]
  }
  rebotarPared(){
    this.velX = -this.velX
  }
  rebotarTechoYPiso(){
    this.velY = -this.velY
  }
}
let dvd1 = new dvdLogo(200,200)

function setup(){
  createCanvas(600,600)
    dvd1.cambiarColor()

}
function draw(){
  background(0)
  dvd1.show()
  dvd1.pX = dvd1.pX + dvd1.velX
  dvd1.pY = dvd1.pY + dvd1.velY
  //detecto paredes :)
  if(dvd1.pX > width-60 || dvd1.pX < 20){
    dvd1.rebotarPared()
    dvd1.cambiarColor()
  }
  //detecto piso y techo
  if(dvd1.pY > height-20 || dvd1.pY < 20){
    dvd1.rebotarTechoYPiso()
    dvd1.cambiarColor()
  }
}
