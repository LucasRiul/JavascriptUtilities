function run() {

    if ("{{contact.source}}" != "WhatsApp") {
        var tipoA = Number("{{EstagioTipoANaoClienteObterInfo}}");
        var tipoB = Number("{{EstagioTipoBNaoClienteObterInfo}}");
        var tipoC = Number("{{EstagioTipoCNaoClienteObterInfo}}");
        var tipoD = Number("{{EstagioTipoDNaoClienteObterInfo}}");
        var tipoE = Number("{{EstagioTipoENaoClienteObterInfo}}");
        var tipoSelecionado = Number("{{TipoCalvicieCabeloNaoClienteObterInfo}}")
    } else {
        var tipoA = "{{EstagioTipoANaoCliente}}";
        tipoA = Number(tipoA.split(" ")[1]);

        var tipoB = "{{EstagioTipoBNaoCliente}}";
        tipoB = Number(tipoB.split(" ")[1]);

        var tipoC = "{{EstagioTipoCNaoCliente}}";
        tipoC = Number(tipoC.split(" ")[1]);

        var tipoD = "{{EstagioTipoDNaoCliente}}";
        tipoD = Number(tipoD.split(" ")[1]);

        var tipoE = "{{EstagioTipoENaoCliente}}";
        tipoE = Number(tipoE.split(" ")[1]);

        var tipoSelecionado = "{{TipoCalvicieCabeloNaoCliente}}";
        tipoSelecionado = Number(tipoSelecionado.split(" ")[1]);


    }

    //Tipo A
    if (tipoSelecionado == 1) {
        if (tipoA == null || tipoA == undefined || tipoA == "null" || tipoA == "undefined") {
            tipoA = 0;
        }

        if (tipoA == 1 || tipoA == 2 || tipoA == 3) {
            return "recomendado";
        }
        if (tipoA == 4 || tipoA == 5) {
            return "recomendadoConsulta";
        }
        if (tipoA == 6 || tipoA == 7) {
            return "naoRecomendado";
        }
    }

    //Tipo B
    if (tipoSelecionado == 2) {
        if (tipoB == null || tipoB == undefined || tipoB == "null" || tipoB == "undefined") {
            tipoB = 0;
        }

        if (tipoB == 1 || tipoB == 2 || tipoB == 3) {
            return "recomendado";
        }
        if (tipoB == 4 || tipoB == 5) {
            return "recomendadoConsulta";
        }
        if (tipoB == 6 || tipoB == 7) {
            return "naoRecomendado";
        }
    }

    //Tipo C
    if (tipoSelecionado == 3) {
        if (tipoC == null || tipoC == undefined || tipoC == "null" || tipoC == "undefined") {
            tipoC = 0;
        }

        if (tipoC == 1 || tipoC == 2) {
            return "recomendado";
        }
        if (tipoC == 3 || tipoC == 4 || tipoC == 5) {
            return "recomendadoConsulta";
        }
        if (tipoC == 6 || tipoC == 7) {
            return "naoRecomendado";
        }
    }

    //Tipo D
    if (tipoSelecionado == 4) {
        if (tipoD == null || tipoD == undefined || tipoD == "null" || tipoD == "undefined") {
            tipoD = 0;
        }

        if (tipoD == 1 || tipoD == 2) {
            return "recomendado";
        }
        if (tipoD == 3 || tipoD == 4 || tipoD == 5) {
            return "recomendadoConsulta";
        }
        if (tipoD == 6 || tipoD == 7) {
            return "naoRecomendado";
        }
    }


    //Tipo E
    if (tipoSelecionado == 5) {
        if (tipoE == null || tipoE == undefined || tipoE == "null" || tipoE == "undefined") {
            tipoE = 0;
        }

        if (tipoE == 1 || tipoE == 2) {
            return "recomendado";
        }
        if (tipoE == 3 || tipoE == 4 || tipoE == 5 || tipoE == 6) {
            return "recomendadoConsulta";
        }
        if (tipoE == 7) {
            return "naoRecomendado";
        }
    }

}