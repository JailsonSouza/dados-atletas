class Atleta {
    constructor(nome, idade, peso, altura, notas ) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        switch (true) {
        case (this.idade >= 9 && this.idade <= 11):
            return "Infantil";
        case (this.idade >= 12 && this.idade <= 13):
            return "Juvenil";
        case (this.idade >= 14 && this.idade <= 15):
            return "Intermediário";
        case (this.idade >= 16 && this.idade <= 30):
            return "Adulto";
        default:
            return "Sem categoria";
        }
    }

    calculaIMC() {
        let IMC = (this.peso / (this.altura * this.altura));

        return IMC;
    }

    calculaMediaValida() {
        let notasValidas = atleta.notas.slice().sort((a, b) => a - b).slice(1, -1);

        let somaDasNotas = 0; 
        notasValidas.forEach(nota => {
            somaDasNotas += nota; 
        });

        let mediaValida = somaDasNotas / notasValidas.length;

        return mediaValida;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());
