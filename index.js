class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = "";

        if(this.tipo.toLowerCase() === "mago"){
            ataque = "magia"; 
        }else if(this.tipo.toLowerCase() === "guerreiro"){
            ataque = "espada";
        }else if(this.tipo.toLowerCase() === "monge"){
            ataque = "artes marciais";
        }else if(this.tipo.toLowerCase() === "ninja"){
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} ${this.nome}, com ${this.idade} anos atacou usando ${ataque} `)
    }

}

const personagens = [
    {nome: "Ryze", idade: 58, tipo: "mago" },
    {nome: "Sett", idade: 30, tipo: "guerreiro" },
    {nome: "Lee Sin", idade: 20, tipo: "monge" },
    {nome: "Shen", idade: 37, tipo: "ninja" }
]

for(i = 0; i < personagens.length; i++){
    let personagem= personagens[i];
    let campeao = new Heroi(personagem.nome, personagem.idade, personagem.tipo);
    campeao.atacar();
}

