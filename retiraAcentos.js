function retira_acentos(str) {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return str;
}

console.log(retira_acentos('nöãâáà'))