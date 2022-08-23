function run(resposta) {
    if(new RegExp("^(Op[CcçÇ][AaÃa]o 1)$","ig").test(resposta)) {
        return "1 - Quero comprar";
    }
    if(new RegExp("^(Op[CcçÇ][AaÃa]o 2)$","ig").test(resposta)) {
        return "2 - Falar com um especialista";
    }
    if(new RegExp("^(Op[CcçÇ][AaÃa]o 3)$","ig").test(resposta)) {
        return "3 - Voltar ao menu anterior";
    }
    if(new RegExp("^(Op[CcçÇ][AaÃa]o 4)$","ig").test(resposta)) {
        return "4 - Encerrar atendimento";
    }
    return "";
}

console.log(run("OPCÃO 1"))