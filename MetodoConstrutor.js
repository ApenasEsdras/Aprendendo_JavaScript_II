//definição do objeto
class Cha {
  constructor(cor, sabor, quantidade){
    this.cor = cor,
    this.sabor = sabor,
    this.quantidade = quantidade
  }
}

let cha1 = new Cha('amarelho', 'camomila', '10 Saques');
// let cha2 = new Cha('amarelho', 'camomila', '10 Saques');
// let cha3 = new Cha('amarelho', 'camomila', '10 Saques');

console.log(cha1);
console.log(cha1 instanceof Cha);//verifica se o Cha1 esta dentro de Cha
// console.log(cha2);
// console.log(cha3);