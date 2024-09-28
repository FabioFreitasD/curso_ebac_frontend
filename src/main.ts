class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
    dizOla() {
        return`${this.nome} diz olá`
    }
}

const nomeDaPessoa = new Pessoa('ana');

console.log(nomeDaPessoa.dizOla());

const multiplicar = (a: number, b: number): number => a * b;

const valor = multiplicar(5, 3)
console.log(valor);