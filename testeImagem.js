function run(imagens) {
    console.log(imagens.length)
    if (!imagens.length) {
        let lista = [];
        lista.push(imagens);
        // lista = lista.map(x => {
        //     let tipoImagem = x.type.split("/");
        //     let nomeImagem = "imagem1." + tipoImagem[1];
        //     return {
        //         "nome": nomeImagem,
        //         "tamanho_bytes": 3003379,
        //         "tipo": x.type,
        //         "url": x.uri
        //     }
        // });
        for (let i = 0; i < lista.length; i++) {
            let tipoImagem = lista[i].type.split("/");
            let nomeImagem = "imagem1." + tipoImagem[1];
            return {
                "nome": nomeImagem,
                "tamanho_bytes": 3003379,
                "tipo": lista[i].type,
                "url": lista[i].uri
            }
        }
        
        return lista;
    } else {
        imagens = JSON.parse(imagens);
        imagens = imagens.map((x, i) => {
            let tipoImagem = x.type.split("/");
            let nomeImagem = "imagem" + (i + 1) + "." + tipoImagem[1];
            return {
                "nome": nomeImagem,
                "tamanho_bytes": 3003379,
                "tipo": x.type,
                "url": x.uri
            }
        });
        return imagens;
    }
}
console.log(run({
    "type": "image/jpeg",
    "uri": "https://blipmediastore.blob.core.windows.net/secure-medias/Media_4e8073f9-5cd0-4f43-b843-5ab71be98c285bb997bd-71a7-460b-a237-c84edac994bd?sv=2019-07-07&st=2022-09-02T02%3A41%3A18Z&se=2022-09-02T03%3A11%3A18Z&sr=b&sp=r&sig=RA0GyYOjARlMXaCR4U%2FME9bnnFjd%2BtVisV6MTHEhph8%3D&secure=true"
}))