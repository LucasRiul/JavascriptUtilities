function run(buscaEmpreendimentoHttpResponseBody, nomeEmpreendimento) {

    let formattedJson = buscaEmpreendimentoHttpResponseBody;

    let empreendimentoCV = formattedJson.filter(x => x.nome.toLowerCase().trim() == nomeEmpreendimento.toLowerCase().trim());

    return empreendimentoCV[0].idempreendimento;
}

function retira_acentos(str) {
    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr = "";
    for (i = 0; i < str.length; i++) {
        troca = false;
        for (a = 0; a < com_acento.length; a++) {
            if (str.substr(i, 1) == com_acento.substr(a, 1)) {
                novastr += sem_acento.substr(a, 1);
                troca = true;
                break;
            }
        }
        if (troca == false) {
            novastr += str.substr(i, 1);
        }
    }
    return novastr;
}

console.log(run([
    {
        "idempreendimento": "2",
        "nome": "Casa Nova",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20190103135939_5c2e3f7b623cf.png",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "3",
        "nome": "Inovare",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20190612161357_5d014ef5ecd78.jpeg",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "4",
        "nome": "Casatech Incorporação",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20190802180236_5d44a4ecd529e.jpg",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "6",
        "nome": "Villas Suzano",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20200127160116_5e2f337c835fd.jpg",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "7",
        "nome": "Residencial Alameda",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20200709195458_5f07a042494bd.png",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "8",
        "nome": "Condomínio Villa das Paineiras - Las Villas",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20210608152537_60bfb621d7d9c.jpeg",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "9",
        "nome": "In Freguesia",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20220509124337_627936a961466.jpeg",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "10",
        "nome": "Habitação Social",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": null,
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "11",
        "nome": "Morada da Serra",
        "cidade": "Mogi das Cruzes",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": null,
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "12",
        "nome": "Condomínio Villa dos Jatobás - Las Villas",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20220509192318_6279945621d70.png",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "13",
        "nome": "In Suzano",
        "cidade": "Suzano",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20220509124211_6279365359319.jpeg",
        "foto_listagem": null,
        "app_exibir": "S",
        "app_cor_background": null
    }
],"casa nova"))