// Leitor de Json em formato de Js puro
// Autor: Isllan
// Objetivo: Eu decidir ler esses json chatos, afinal, porque eu nao consigo ler? se todos conseguem, porque eu não? eu hein.

const fs = require("fs/promises");

// Criando a função
async function leitor() {
    // Catamos o o arquivo json
    const arquivo = await fs.readFile("./package.json");
    // Transformamos ele em Objeto Javascript
    const dados = await JSON.parse(arquivo);

    // Agora vamos ler e imprimir
    console.log("Lendo os principais");
    console.log("Nome: " + dados.name);
    console.log("Versão: " + dados.version);
    console.log("Descrição: " + dados.description);
    console.log("Main: " + dados.main);

    // lendo scripts/comandos
    console.log("Agora, lendo scripts");
    const scripts = dados.scripts;
    console.log("Scripts: {\ntest: " + scripts.test + "\n}");

    // lendo os finais
    console.log("Finais: {");
    console.log("KeyWord ou teclas em portugues: " + dados.keywords);
    console.log("Autor: " + dados.author);
    console.log("Lincensa: " + dados.license)
    console.log("Tipo: " + dados.type);
}

leitor();