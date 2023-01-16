/**
 * o this e semelhante ao return com o  * diferencial
 * de poder acessas uma propriedade e em conjunto 
 * com o return fazer sua exibição.
 * 
 */
// forma padrao de se chamar um objt (lietarl)
const cozinha = {
  fogao: 'acessando o fogao',
};
console.log(cozinha.fogao);


// retorno de objt com o this

class bolaDePapel{
  tamanho = 1;
  aumentoTamanho(){
    this.tamanho ++;
    return this;
  }
  diminoiTamanho(){
    this.tamanho --;
    return this;
  }
}

let bola = new bolaDePapel();

bola.aumentoTamanho()
    .aumentoTamanho()
    .aumentoTamanho()
    .diminoiTamanho()

console.log(bola.tamanho);

//

// var teste = 5;

// console.log(this);
// console.log(this.teste);
// console.log(teste);

let pessoa = {
  nome: "Esdras",
  idade: 21,
  falar: function() {
    console.log("Olá, tudo bem?");
  },
  dizerNome: function() {
    // forma normal
    console.log("O meu nome é " + pessoa.nome);
    // com o this
    console.log("O meu nome é " + this.nome);
  },
  aniversario: function() { 
      // forma normal
      console.log(`Voce tem ${pessoa.idade ++}`);
  },
  aniversario2: function(){
     // com o this
     console.log(`Voce tem ${this.idade += 1}`);
  },
  saudacao: function() {
    return 'Sr. ' + this.nome;
  }
};

pessoa.dizerNome();
// pessoa.aniversario();
// pessoa.aniversario2();

console.log("tenho " + pessoa.idade + " anos");

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);