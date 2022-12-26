class Bola {
  static instance: Bola;

  codigo = "Aida não recebeu codigo";

  private construtor() {} //calcula a classe internamente

  static getInstance() {
    if (!Bola.instance) {
      Bola.instance = new Bola();
    }
    return Bola.instance;
  }
}

let bola1 = Bola.getInstance();
let bola2 = Bola.getInstance();
let bola3 = Bola.getInstance();

bola1.codigo = "BO_01";
bola2.codigo = "BO_02";

console.log(bola1.codigo);
console.log(bola2.codigo);
console.log(bola3.codigo);

//metodo  estatico
// é um metodo que não presisa ser instancedo para poder funcionar.
