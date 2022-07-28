function run(body) {
    let formmatedJson = /*JSON.parse( */ body /* ) */;
    let uris = [];
    let json = [];
    for (let i = 0; i < formmatedJson.length; i++) {
        uris.push(formmatedJson[i].midias.map(x => x.url));
    }
    for (let i = 0; i < uris.length; i++) {
        var listaImagens = uris[i].concat(uris[i - 1]);
    }
    for (let i = 0; i < listaImagens.length; i++) {
        var dotIndex = listaImagens[i].lastIndexOf(".");
        var imageType = listaImagens[i].substr(dotIndex);
        listaImagens[i] = listaImagens[i].replace("[[LARGURA]]/[[ALTURA]]", "480/480");
        let item = {
            "type": "application/vnd.lime.media-link+json",
            "value": {
                "type": "image/" + imageType,
                "uri": listaImagens[i]
            }
        }
        json.push(item);
    }
    let conteudo = {
        "itemType": "application/vnd.lime.container+json",
        "items": json
    }
    return conteudo;
}