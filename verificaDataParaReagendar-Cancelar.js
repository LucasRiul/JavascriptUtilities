function run(atividadeSelecionada) {
    let currentDate = new Date();


    let dataAgendamento = new Date(atividadeSelecionada.scheduling.date + 'T' + atividadeSelecionada.scheduling.time);

    let validaDia = false;

    if (dataAgendamento.getFullYear() == currentDate.getFullYear() && dataAgendamento.getMonth() >= currentDate.getMonth()) {
        if (dataAgendamento.getMonth() == currentDate.getMonth()) {
            if (currentDate.getDate() == (dataAgendamento.getDate() - 1)) {
                currentDate = zeraHoras(currentDate);
                dataAgendamento = zeraHoras(dataAgendamento);
                if ((currentDate.getHours() + 1) <= dataAgendamento.getHours()) {
                    validaDia = true;
                }


            } else {
                if (currentDate.getDate() < (dataAgendamento.getDate() - 1)) {
                    validaDia = true;
                }
            }


        } else {
            validaDia = true;
        }


    }
    if (dataAgendamento.getFullYear() > currentDate.getFullYear()) {
        validaDia = true;
    }

    return validaDia;
}

function zeraHoras(dataRecebida) {
    dataRecebida.setMinutes(0);
    dataRecebida.setSeconds(0);
    dataRecebida.setMilliseconds(0);

    return dataRecebida;
}

console.log(run({
    "id": "MTc5M2JlOGUtY2Q1Ny00ZTA2LThlY2EtNGY5OTJhNGQwMTM5OjQwNDA4",
    "duration": 60,
    "position": 100,
    "status": "reported",
    "startedAt": "2022-04-08T18:00:01.000Z",
    "completedAt": "2022-04-08T18:04:07.000Z",
    "statusDescription": null,
    "description": null,
    "viewedAt": "2022-04-08T18:00:01Z",
    "receivedAt": "2022-04-08T17:59:57Z",
    "archived": false,
    "createdAt": "2022-04-08T12:16:21Z",
    "employee": {
        "id": "NDQ0OTQ6NDA0MDg="
    },
    "order": {
        "id": "MzRjNTA0YzctOWE4YS00ZWExLTlkMGEtZDE0NzI5MjU5MmMzOjQwNDA4"
    },
    "scheduling": {
        "type": "scheduled-date-and-time",
        "date": "2022-07-22",
        "time": "16:00:00"
    },
    "coords": {
        "latitude": -23.564136,
        "longitude": -46.322144
    }
}))