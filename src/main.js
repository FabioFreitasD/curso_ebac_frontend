"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} diz olá`;
    }
}
const nomeDaPessoa = new Pessoa('ana');
console.log(nomeDaPessoa.dizOla());
const multiplicar = (a, b) => a * b;
const valor = multiplicar(5, 3);
console.log(valor);
