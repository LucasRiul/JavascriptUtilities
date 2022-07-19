let currentDate = new Date();

console.log(currentDate)

let horaAgendamento = '18:30:00';

let letra = 'T';

let dataAgendamento = '2023-07-15';

let dataFinal = new Date('2022-07-15T23:30:00');

let validaDia = false;

if (dataFinal.getFullYear() == currentDate.getFullYear() && dataFinal.getMonth() >= currentDate.getMonth()) {
    if (dataFinal.getMonth() == currentDate.getMonth()) {
        if (currentDate.getDate() == (dataFinal.getDate() - 1)) {
            currentDate = zeraHoras(currentDate);
            dataFinal = zeraHoras(dataFinal);
            if (currentDate.getHours() <= dataFinal.getHours()) {
                validaDia = true;
            }


        } else {
            if (currentDate.getDate() < (dataFinal.getDate() - 1)) {
                validaDia = true;
            }
        }


    } else {
        validaDia = true;
    }


}
if (dataFinal.getFullYear() > currentDate.getFullYear()) {
    validaDia = true;
}

function zeraHoras(dataRecebida) {
    dataRecebida.setMinutes(0);
    dataRecebida.setSeconds(0);
    dataRecebida.setMilliseconds(0);

    return dataRecebida;
}

