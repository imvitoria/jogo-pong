//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
 
//variaveis da bolinha
let diametro = 22
let xBolinha = 300
let yBolinha = 200
let raio = diametro / 2 ;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);}

function movimentaBolinha(){ xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}