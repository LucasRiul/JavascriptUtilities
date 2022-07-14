let respuser = '23/04/2001';

respuser = respuser.split("/").reverse();

respuser = respuser.toString()
for (let i = 0; i < respuser.length; i++) {
    respuser = respuser.replace(",", "-");
}

console.log(respuser)