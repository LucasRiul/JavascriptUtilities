let currentDate = new Date();

let dataAgendamento = new Date('2022-07-15');

let validaAnoMes = ((dataAgendamento.getFullYear() == currentDate.getFullYear() && dataAgendamento.getMonth() >= currentDate.getMonth()) ||
    dataAgendamento.getFullYear() > currentDate.getFullYear());

let validaDia = false;

if (validaAnoMes == true) {

    if (currentDate.getDate() > (dataAgendamento.getDate() - 1)) {
        validaDia = false;
    }
    else {
        validaDia = true;
    }
}