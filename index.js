class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken",
        };

        if (ataques[this.tipo]) {
            console.log(`${this.nome}, o ${this.tipo}, atacou usando ${ataques[this.tipo]}.`);
        }
        else {
            console.log(`${this.nome}, tentou atacar,mas o tipo de ataque é desconhecido.`);
        }
    }    
}    

//Criando instâncias e chamando o método atacar
const herois = [
    new heroi("Carlos", 45, "monge"),
];

herois.forEach(heroi => heroi.atacar());