function Carro(modelo, fabricante, anoModelo, anoFabricacao, kilometragem, telefone, valor) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.kilometragem = kilometragem;
    this.telefone = telefone;
    this.valor = valor;
}

Carro.prototype.getKilometragem = function() {
    return `Você rodou ${this.kilometragem} km, é hora de trocar o óleo`;
}

Carro.prototype.get = function() {
    return `Seu ${this.modelo} ${this.fabricante} está novo.`;
}

function venderCarro(carro) {
    return `Carro à venda: ${carro.modelo} ${carro.fabricante}, Ano: ${carro.anoModelo}, Quilometragem: ${carro.kilometragem}, Valor: ${carro.valor}, Contato: ${carro.telefone}`;
}

Carro.prototype.verificaAno = function(anoFabricacao) {
    if (this.anoFabricacao === anoFabricacao) {
        return `ano correto`;
    } else {
        return `ano errado`;
    }
}

const meuCarro2 = new Carro("Corolla", "Toyota", 2022, 2021, "10 mil KM", "(35)91929192", "R$ 80.000");

console.log(meuCarro2);
console.log(meuCarro2.getKilometragem());
console.log(meuCarro2.get());
console.log(venderCarro(meuCarro2));
console.log(meuCarro2.verificaAno(2021));
