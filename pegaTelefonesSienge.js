function run(buscaClienteIdHttpResponseBody, canal, respostaWhatsapp, respostaOC) {

    let formmatedJson = JSON.parse(buscaClienteIdHttpResponseBody);
    let telefonesCliente = [];
    let telefones = formmatedJson.phones;
    let telefone = "";

    for (i = 0; i < telefones.length; i++) {
        let tel = telefones[i].number;
        let tipo = telefones[i].type;
        let observacao = telefones[i].note;
        let idd = telefones[i].idd;

        tel = tel.replace(/[^\d]+/g, '');

        if (tel[0] != "0") {
            tel = "0" + tel;
        }

        if (tipo == "Comercial") {
            tipo = "CO";
        }
        if (tipo == "Residencial") {
            tipo = "RE";
        }
        if (tipo == "Celular") {
            tipo = "CE";
        }

        if (telefones[i].main == true) {
            telefone =
                {
                    "number": tel,
                    "main": true,
                    "type": tipo,
                    "note": observacao,
                    "idd": idd
                }

        }
        else {
            telefone =
                {
                    "number": tel,
                    "main": false,
                    "type": tipo,
                    "note": observacao,
                    "idd": idd
                }
        }
        telefonesCliente.push(telefone)
    }

    if (telefones.length == 0) {
        if ("{{contact.source}}" != ("WhatsApp")) {
            telefone =
                {
                    "number": "{{MenuSCFAtualizaCadastro31}}",
                    "main": true,
                    "type": "{{tipoTelefone}}",
                    "note": "Registrado via chatbot",
                    "idd": "+55"
                }

        } else {
            telefone =
                {
                    "number": "{{MenuSCFAtualizaCadastro34}}",
                    "main": true,
                    "type": "{{tipoTelefone}}",
                    "note": "Registrado via chatbot",
                    "idd": "+55"
                }

        }
    } else {
        if ("{{contact.source}}" != ("WhatsApp")) {
            telefone =
                {
                    "number": "{{MenuSCFAtualizaCadastro31}}",
                    "main": false,
                    "type": "{{tipoTelefone}}",
                    "note": "Registrado via chatbot",
                    "idd": "+55"
                }

        } else {
            telefone =
                {
                    "number": "{{MenuSCFAtualizaCadastro34}}",
                    "main": false,
                    "type": "{{tipoTelefone}}",
                    "note": "Registrado via chatbot",
                    "idd": "+55"
                }

        }
    }

    telefonesCliente.push(telefone);

    return telefonesCliente;
}