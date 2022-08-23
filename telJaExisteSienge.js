function run(buscaClienteIdHttpResponseBody, canal, respostaWhatsapp, respostaOC) {
    let formmatedJson = buscaClienteIdHttpResponseBody;
    let telefones = formmatedJson.phones;
    for (let i = 0; i < telefones.length; i++) {
        telefones[i].number = telefones[i].number.replace(/[^\d]+/g, '');
        telefones[i].number[0] != "0" ? "0" + telefones[i].number : telefones[i].number;
    }
    let resposta;
    if (canal.toLowerCase() == "whatsapp") {
        resposta = respostaWhatsapp;
    } else {
        resposta = respostaOC;
    }
    let telefoneCadastrado = telefones.some(x => x.number == resposta);
    return !telefoneCadastrado;
}

console.log(run({
    "id": 930,
    "personType": "Física",
    "createdAt": "2019-04-10",
    "modifiedAt": "2022-08-05",
    "issuingBody": "",
    "phones": [
        {
            "type": "Celular",
            "number": "(016)991153088",
            "main": true,
            "note": "Registrado via chatbot",
            "idd": "+55"
        },
        {
            "type": "Celular",
            "number": "(016)993007241",
            "main": false,
            "note": "Registrado via chatbot",
            "idd": "+55"
        },
        {
            "type": "Celular",
            "number": "(016)991153088",
            "main": false,
            "note": "Registrado via chatbot",
            "idd": "+55"
        },
        {
            "type": "Comercial",
            "number": "(016)991153088",
            "main": false,
            "note": "Registrado via chatbot",
            "idd": "+55"
        }
    ],
    "addresses": [
        {
            "type": "Comercial",
            "streetName": "Rua Marechal Milton Freitas de Almeida",
            "number": "321",
            "complement": "Sim",
            "neighborhood": "Jardim Marchesi",
            "cityId": 110,
            "city": "Ribeirão Preto",
            "state": "SP",
            "zipCode": "14031150",
            "mail": true
        },
        {
            "type": "Residencial",
            "streetName": "Avenida Paranapanema",
            "number": "123",
            "complement": "Sim",
            "neighborhood": "Sumarezinho",
            "cityId": 110,
            "city": "Ribeirão Preto",
            "state": "SP",
            "zipCode": "14051290",
            "mail": false
        }
    ],
    "procurators": [],
    "contacts": [],
    "birthPlace": "",
    "civilStatus": null,
    "cpf": "03460157585",
    "email": "lucasriul85@gmail.com",
    "fatherName": "",
    "sex": "Masculino",
    "matrimonialRegime": "",
    "name": "KAROLINE AGUIAR",
    "nationality": "",
    "numberIdentityCard": "",
    "motherName": "",
    "profession": null,
    "birthDate": null,
    "issueDateIdentityCard": null,
    "marriageDate": null,
    "spouse": null,
    "familyIncome": []
}, 'Whatsapp', '016991153088', undefined))