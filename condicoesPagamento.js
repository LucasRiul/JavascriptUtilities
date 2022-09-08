function run(body){
    let listaCP = body.results;
    listaCP = listaCP.filter(x => (x.id != "FI") && (x.id != "FG") && (x.id != "RE"));
    listaCP = listaCP.map(x => x.id);

    return listaCP;
}

console.log(run({
    "resultSetMetadata": {
        "count": 28,
        "offset": 0,
        "limit": 100
    },
    "results": [
        {
            "id": "AC",
            "description": "ADIANTAMENTO A CLIENTE",
            "maxInstallmentsNumber": 9999
        },
        {
            "id": "AT",
            "description": "Ato",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "C1",
            "description": "COMISSÃO UNICA 1",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "C2",
            "description": "COMISSÃO UNICA 2",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "CH",
            "description": "Entrega das chaves",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "CM",
            "description": "COMISSÃO MENSAL",
            "maxInstallmentsNumber": 900
        },
        {
            "id": "CU",
            "description": "CUSTAS",
            "maxInstallmentsNumber": 900
        },
        {
            "id": "EC",
            "description": "Entrega de Chaves",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "FG",
            "description": "FGTS",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "FI",
            "description": "Financiamento",
            "maxInstallmentsNumber": 999
        },
        {
            "id": "JU",
            "description": "Acordo Judicial",
            "maxInstallmentsNumber": 9999
        },
        {
            "id": "M2",
            "description": "Parcela Mensal 2",
            "maxInstallmentsNumber": 900
        },
        {
            "id": "M3",
            "description": "Parcela Mensal 3",
            "maxInstallmentsNumber": 900
        },
        {
            "id": "M9",
            "description": "PMP",
            "maxInstallmentsNumber": 900
        },
        {
            "id": "NJ",
            "description": "Acordo ADV Extrajudicial",
            "maxInstallmentsNumber": 9999
        },
        {
            "id": "P2",
            "description": "PARCELA UNICA 2",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "P3",
            "description": "PARCELA UNICA 3",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "PA",
            "description": "Parcelas Anuais",
            "maxInstallmentsNumber": 100
        },
        {
            "id": "PB",
            "description": "Parcelas Bimestrais",
            "maxInstallmentsNumber": 100
        },
        {
            "id": "PI",
            "description": "Parcelas Iniciais",
            "maxInstallmentsNumber": 20
        },
        {
            "id": "PM",
            "description": "Parcelas Mensais",
            "maxInstallmentsNumber": 900
        },
        {
            "id": "PQ",
            "description": "PARCELA QUINZENAL",
            "maxInstallmentsNumber": 9000
        },
        {
            "id": "PS",
            "description": "Parcelas Semestrais",
            "maxInstallmentsNumber": 100
        },
        {
            "id": "PT",
            "description": "PARCELAS TRIMESTRAIS",
            "maxInstallmentsNumber": 99
        },
        {
            "id": "PU",
            "description": "PARCELA ÚNICA",
            "maxInstallmentsNumber": 1
        },
        {
            "id": "RE",
            "description": "Resíduo",
            "maxInstallmentsNumber": 99
        },
        {
            "id": "RP",
            "description": "Reparcelamento",
            "maxInstallmentsNumber": 9999
        },
        {
            "id": "SB",
            "description": "SUBSIDIO",
            "maxInstallmentsNumber": 1
        }
    ]
}))