//definição do objeto
class Cha {
  constructor(cor, sabor, quantidade){
    this.cor = cor,
    this.sabor = sabor,
    this.quantidade = quantidade
  }
} 

let cha1 = new Cha('amarelo', 'camomila', '10 Saques');
let cha2 = new Cha('vermelho', 'angico', '10 Saques');
// let cha3 = new Cha('amarelo', 'camomila', '10 Saques');

console.log(cha1);//FAZ A ESCRITA
console.log(cha2);
console.log(cha1 instanceof Cha);//verifica se o Cha1 esta dentro de Cha
console.log(cha2 instanceof Cha);//verifica se o Cha1 esta dentro de Cha
// console.log(cha2);
// console.log(cha3);


// cha1 instanceof Cha
// esse --instanceof-- é utilizado pra
//  verificar se algo contem em algo. 
