function run(body) {
    let formmatedJson = body;
    let uris = [];
    let json = [];
    uris.push(formmatedJson[0].midias.map(x => x.url));
    uris = uris[0];
    for (let i = 0; i < uris.length; i++) {
        var dotIndex = uris[i].lastIndexOf(".");
        var imageType = uris[i].substr(dotIndex);
        uris[i] = uris[i].replace("[[LARGURA]]/[[ALTURA]]", "540/540");
        let item = {
            "type": "application/vnd.lime.media-link+json",
            "value": {
                "type": "image/" + imageType,
                "uri": uris[i]
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
console.log(run([
    {
        "idgaleria": 10,
        "nome": "Julho 2022",
        "data_base": "2022-07-01",
        "quantidade_midias": null,
        "data_cad": "2022-07-19 17:48:45",
        "midias": [
            {
                "idmidia": 255,
                "idgaleria": 10,
                "titulo": "Jul/2022",
                "nome": "2022jul1.jpeg",
                "tamanho": 127715,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c555920f.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 256,
                "idgaleria": 10,
                "titulo": "jul/2022",
                "nome": "2022jul2.jpeg",
                "tamanho": 121896,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c557dede.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 257,
                "idgaleria": 10,
                "titulo": "jul/2022",
                "nome": "2022jul3.jpeg",
                "tamanho": 105655,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c558f559.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 258,
                "idgaleria": 10,
                "titulo": "jul/2022",
                "nome": "2022jul4.jpeg",
                "tamanho": 109314,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c55aeab4.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 259,
                "idgaleria": 10,
                "titulo": "jul/2022",
                "nome": "2022jul5.jpeg",
                "tamanho": 114593,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c55bf57c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 260,
                "idgaleria": 10,
                "titulo": "jul/2022",
                "nome": "2022jul6.jpeg",
                "tamanho": 75150,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c55d1299.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 261,
                "idgaleria": 10,
                "titulo": "jul/2022",
                "nome": "2022jul7.jpeg",
                "tamanho": 101565,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220719180421_62d71c55e1674.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 8,
        "nome": "Junho 2022",
        "data_base": "2022-06-01",
        "quantidade_midias": null,
        "data_cad": "2022-06-27 16:16:26",
        "midias": [
            {
                "idmidia": 188,
                "idgaleria": 8,
                "titulo": "2022jun1",
                "nome": "2022jun1.jpeg",
                "tamanho": 93477,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164918_62ba09be9ac1a.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 189,
                "idgaleria": 8,
                "titulo": "2022jun2",
                "nome": "2022jun2.jpeg",
                "tamanho": 73653,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164918_62ba09bed182e.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 190,
                "idgaleria": 8,
                "titulo": "2022jun3",
                "nome": "2022jun3.jpeg",
                "tamanho": 106413,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164918_62ba09beef026.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 191,
                "idgaleria": 8,
                "titulo": "2022jun4",
                "nome": "2022jun4.jpeg",
                "tamanho": 117120,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bf0d6fb.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 192,
                "idgaleria": 8,
                "titulo": "2022jun5",
                "nome": "2022jun5.jpeg",
                "tamanho": 137702,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bf2c494.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 193,
                "idgaleria": 8,
                "titulo": "2022jun6",
                "nome": "2022jun6.jpeg",
                "tamanho": 97939,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bf4ae38.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 194,
                "idgaleria": 8,
                "titulo": "2022jun7",
                "nome": "2022jun7.jpeg",
                "tamanho": 123341,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bf63e22.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 195,
                "idgaleria": 8,
                "titulo": "2022jun8",
                "nome": "2022jun8.jpeg",
                "tamanho": 50445,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bf78795.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 196,
                "idgaleria": 8,
                "titulo": "2022jun9",
                "nome": "2022jun9.jpeg",
                "tamanho": 35654,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bf92aa1.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 197,
                "idgaleria": 8,
                "titulo": "2022jun10",
                "nome": "2022jun10.jpeg",
                "tamanho": 58368,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627164919_62ba09bfada79.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 198,
                "idgaleria": 8,
                "titulo": "2022jun11",
                "nome": "2022jun11.jpeg",
                "tamanho": 107856,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165016_62ba09f8f21e7.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 199,
                "idgaleria": 8,
                "titulo": "2022jun12",
                "nome": "2022jun12.jpeg",
                "tamanho": 32851,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165017_62ba09f949bd9.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 200,
                "idgaleria": 8,
                "titulo": "2022jun13",
                "nome": "2022jun13.jpeg",
                "tamanho": 77451,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165017_62ba09f95ea52.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 201,
                "idgaleria": 8,
                "titulo": "2022jun14",
                "nome": "2022jun14.jpeg",
                "tamanho": 123417,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165017_62ba09f97d66d.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 202,
                "idgaleria": 8,
                "titulo": "2022jun15",
                "nome": "2022jun15.jpeg",
                "tamanho": 106922,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165017_62ba09f9a2e77.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 203,
                "idgaleria": 8,
                "titulo": "2022jun16",
                "nome": "2022jun16.jpeg",
                "tamanho": 96868,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165017_62ba09f9c49c9.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 204,
                "idgaleria": 8,
                "titulo": "2022jun17",
                "nome": "2022jun17.jpeg",
                "tamanho": 31410,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165017_62ba09f9ea241.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 205,
                "idgaleria": 8,
                "titulo": "2022jun18",
                "nome": "2022jun18.jpeg",
                "tamanho": 39813,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165018_62ba09fa14eec.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 206,
                "idgaleria": 8,
                "titulo": "2022jun19",
                "nome": "2022jun19.jpeg",
                "tamanho": 85451,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165018_62ba09fa32613.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 207,
                "idgaleria": 8,
                "titulo": "2022jun20",
                "nome": "2022jun20.jpeg",
                "tamanho": 52013,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165018_62ba09fa4cc39.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 208,
                "idgaleria": 8,
                "titulo": "2022jun21",
                "nome": "2022jun21.jpeg",
                "tamanho": 85992,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165508_62ba0b1ca9200.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 209,
                "idgaleria": 8,
                "titulo": "2022jun22",
                "nome": "2022jun22.jpeg",
                "tamanho": 98931,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165510_62ba0b1e0a877.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 210,
                "idgaleria": 8,
                "titulo": "2022jun23",
                "nome": "2022jun23.jpeg",
                "tamanho": 127302,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165510_62ba0b1e29555.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 211,
                "idgaleria": 8,
                "titulo": "2022jun24",
                "nome": "2022jun24.jpeg",
                "tamanho": 73810,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165510_62ba0b1e3ff9b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 215,
                "idgaleria": 8,
                "titulo": "2022jun25",
                "nome": "2022jun25.jpeg",
                "tamanho": 122574,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165619_62ba0b63a7dbb.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 216,
                "idgaleria": 8,
                "titulo": "2022jun26",
                "nome": "2022jun26.jpeg",
                "tamanho": 53858,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165619_62ba0b63d1769.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 217,
                "idgaleria": 8,
                "titulo": "2022jun27",
                "nome": "2022jun27.jpeg",
                "tamanho": 113882,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220627165619_62ba0b63e7cd4.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 7,
        "nome": "Abril 2022",
        "data_base": "2022-04-01",
        "quantidade_midias": null,
        "data_cad": "2022-05-11 14:43:42",
        "midias": [
            {
                "idmidia": 129,
                "idgaleria": 7,
                "titulo": "2022abr1",
                "nome": "2022abr1.jpeg",
                "tamanho": 128661,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220511145512_627bf880b3089.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 130,
                "idgaleria": 7,
                "titulo": "2022abr2",
                "nome": "2022abr2.jpeg",
                "tamanho": 129837,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220511145513_627bf88141e8a.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 131,
                "idgaleria": 7,
                "titulo": "2022abr3",
                "nome": "2022abr3.jpeg",
                "tamanho": 84847,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220511145513_627bf88158234.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 132,
                "idgaleria": 7,
                "titulo": "2022abr4",
                "nome": "2022abr4.jpeg",
                "tamanho": 87909,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220511145513_627bf88170575.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 133,
                "idgaleria": 7,
                "titulo": "2022abr5",
                "nome": "2022abr5.jpeg",
                "tamanho": 60130,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220511145513_627bf8818528b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 134,
                "idgaleria": 7,
                "titulo": "2022abr6",
                "nome": "2022abr6.jpeg",
                "tamanho": 61065,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220511145513_627bf881a27bd.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 6,
        "nome": "Março 2022",
        "data_base": "2022-03-01",
        "quantidade_midias": null,
        "data_cad": "2022-04-07 12:10:27",
        "midias": [
            {
                "idmidia": 111,
                "idgaleria": 6,
                "titulo": "2022mar1",
                "nome": "2022mar1.jpeg",
                "tamanho": 125864,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121211_624eff4b5aced.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 112,
                "idgaleria": 6,
                "titulo": "2022mar2",
                "nome": "2022mar2.jpeg",
                "tamanho": 106249,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121211_624eff4bad221.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 113,
                "idgaleria": 6,
                "titulo": "2022mar3",
                "nome": "2022mar3.jpeg",
                "tamanho": 121855,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121211_624eff4bbeeea.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 114,
                "idgaleria": 6,
                "titulo": "2022mar4",
                "nome": "2022mar4.jpeg",
                "tamanho": 134541,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121211_624eff4bd6618.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 115,
                "idgaleria": 6,
                "titulo": "2022mar5",
                "nome": "2022mar5.jpeg",
                "tamanho": 122669,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121211_624eff4bf3a0e.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 116,
                "idgaleria": 6,
                "titulo": "2022mar6",
                "nome": "2022mar6.jpeg",
                "tamanho": 122791,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121212_624eff4c21663.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 117,
                "idgaleria": 6,
                "titulo": "2022mar7",
                "nome": "2022mar7.jpeg",
                "tamanho": 127582,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121212_624eff4c3812b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 118,
                "idgaleria": 6,
                "titulo": "2022mar8",
                "nome": "2022mar8.jpeg",
                "tamanho": 127562,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121212_624eff4c4b22c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 119,
                "idgaleria": 6,
                "titulo": "2022mar9",
                "nome": "2022mar9.jpeg",
                "tamanho": 47167,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121212_624eff4c65722.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 120,
                "idgaleria": 6,
                "titulo": "2022mar10",
                "nome": "2022mar10.jpeg",
                "tamanho": 33998,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121212_624eff4c7bebc.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 121,
                "idgaleria": 6,
                "titulo": "2022mar11",
                "nome": "2022mar11.jpeg",
                "tamanho": 46796,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121223_624eff57b74c1.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 122,
                "idgaleria": 6,
                "titulo": "2022mar12",
                "nome": "2022mar12.jpeg",
                "tamanho": 133413,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121223_624eff57e034c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 123,
                "idgaleria": 6,
                "titulo": "2022mar13",
                "nome": "2022mar13.jpeg",
                "tamanho": 32073,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121224_624eff580e8b2.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 124,
                "idgaleria": 6,
                "titulo": "2022mar14",
                "nome": "2022mar14.jpeg",
                "tamanho": 60561,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121224_624eff58229b0.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 125,
                "idgaleria": 6,
                "titulo": "2022mar15",
                "nome": "2022mar15.jpeg",
                "tamanho": 31969,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121224_624eff583fc7a.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 126,
                "idgaleria": 6,
                "titulo": "2022mar16",
                "nome": "2022mar16.jpeg",
                "tamanho": 38591,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121224_624eff5862bef.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 127,
                "idgaleria": 6,
                "titulo": "2022mar17",
                "nome": "2022mar17.jpeg",
                "tamanho": 48140,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121224_624eff588590d.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 128,
                "idgaleria": 6,
                "titulo": "2022mar18",
                "nome": "2022mar18.jpeg",
                "tamanho": 102387,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220407121224_624eff589cbdd.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 5,
        "nome": "Fevereiro 2022",
        "data_base": "2022-02-01",
        "quantidade_midias": null,
        "data_cad": "2022-02-15 16:05:51",
        "midias": [
            {
                "idmidia": 90,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.17.29.jpeg",
                "tamanho": 116737,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172216_620c0b787e470.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 91,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.17.30.jpeg",
                "tamanho": 130928,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172216_620c0b78c02aa.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 92,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.18 (1).jpeg",
                "tamanho": 91079,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172308_620c0bac80081.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 93,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.18.jpeg",
                "tamanho": 150098,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172308_620c0bacd6ab3.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 94,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.20.jpeg",
                "tamanho": 110754,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172343_620c0bcfa9d35.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 95,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.21 (2).jpeg",
                "tamanho": 71496,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172344_620c0bd02a244.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 96,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.21 (3).jpeg",
                "tamanho": 66918,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172344_620c0bd04c049.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 97,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.21.jpeg",
                "tamanho": 64792,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172441_620c0c0955633.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 98,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.22 (1).jpeg",
                "tamanho": 69866,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172441_620c0c09a0326.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 99,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.22 (2).jpeg",
                "tamanho": 68832,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172441_620c0c09afb28.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 100,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.20.22.jpeg",
                "tamanho": 87729,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172543_620c0c4792115.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 101,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.18.jpeg",
                "tamanho": 125118,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172543_620c0c47ba6e4.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 102,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.46.jpeg",
                "tamanho": 68175,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172543_620c0c47d3d13.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 103,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.47 (1).jpeg",
                "tamanho": 99848,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172604_620c0c5cd5e60.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 104,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.47.jpeg",
                "tamanho": 65905,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172710_620c0c9ee4a3f.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 105,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.48 (1).jpeg",
                "tamanho": 104526,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172711_620c0c9f40eec.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 106,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.49.jpeg",
                "tamanho": 175414,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172745_620c0cc1c89c0.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 107,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.50 (1).jpeg",
                "tamanho": 100684,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172746_620c0cc244ba1.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 108,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.50.jpeg",
                "tamanho": 93317,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172917_620c0d1db7718.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 109,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.51.jpeg",
                "tamanho": 105699,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172918_620c0d1e1613c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 110,
                "idgaleria": 5,
                "titulo": "WhatsApp Image 2022-02-15 at 15",
                "nome": "WhatsApp Image 2022-02-15 at 15.21.56.jpeg",
                "tamanho": 96388,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20220215172918_620c0d1e2e5d9.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 3,
        "nome": "Novembro 2021",
        "data_base": "2021-11-01",
        "quantidade_midias": null,
        "data_cad": "2021-11-13 00:11:01",
        "midias": [
            {
                "idmidia": 38,
                "idgaleria": 3,
                "titulo": "2021Nov1",
                "nome": "2021Nov1.jpeg",
                "tamanho": 139856,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001318_618f2d4e89913.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 39,
                "idgaleria": 3,
                "titulo": "2021Nov2",
                "nome": "2021Nov2.jpeg",
                "tamanho": 82983,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f0eb9b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 40,
                "idgaleria": 3,
                "titulo": "2021Nov3",
                "nome": "2021Nov3.jpeg",
                "tamanho": 117637,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f2a233.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 41,
                "idgaleria": 3,
                "titulo": "2021Nov4",
                "nome": "2021Nov4.jpeg",
                "tamanho": 179690,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f39ea8.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 42,
                "idgaleria": 3,
                "titulo": "2021Nov5",
                "nome": "2021Nov5.jpeg",
                "tamanho": 113869,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f567e6.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 43,
                "idgaleria": 3,
                "titulo": "2021Nov6",
                "nome": "2021Nov6.jpeg",
                "tamanho": 123577,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f64fc0.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 44,
                "idgaleria": 3,
                "titulo": "2021Nov7",
                "nome": "2021Nov7.jpeg",
                "tamanho": 135046,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f77004.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 45,
                "idgaleria": 3,
                "titulo": "2021Nov8",
                "nome": "2021Nov8.jpeg",
                "tamanho": 105798,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4f98e73.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 46,
                "idgaleria": 3,
                "titulo": "2021Nov9",
                "nome": "2021Nov9.jpeg",
                "tamanho": 147818,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4fb5a9f.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 47,
                "idgaleria": 3,
                "titulo": "2021Nov10",
                "nome": "2021Nov10.jpeg",
                "tamanho": 129455,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001319_618f2d4fedb0c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 48,
                "idgaleria": 3,
                "titulo": "2021Nov11",
                "nome": "2021Nov11.jpeg",
                "tamanho": 88506,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001324_618f2d54822f6.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 49,
                "idgaleria": 3,
                "titulo": "2021Nov12",
                "nome": "2021Nov12.jpeg",
                "tamanho": 59665,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001324_618f2d54a0c39.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 50,
                "idgaleria": 3,
                "titulo": "2021Nov13",
                "nome": "2021Nov13.jpeg",
                "tamanho": 52816,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001324_618f2d54b5db2.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 51,
                "idgaleria": 3,
                "titulo": "2021Nov14",
                "nome": "2021Nov14.jpeg",
                "tamanho": 87999,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001324_618f2d54c8937.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 52,
                "idgaleria": 3,
                "titulo": "2021Nov15",
                "nome": "2021Nov15.jpeg",
                "tamanho": 102719,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001324_618f2d54d9cbe.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 53,
                "idgaleria": 3,
                "titulo": "2021Nov16",
                "nome": "2021Nov16.jpeg",
                "tamanho": 47791,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001324_618f2d54ec749.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 54,
                "idgaleria": 3,
                "titulo": "2021Nov17",
                "nome": "2021Nov17.jpeg",
                "tamanho": 66111,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001325_618f2d550fb98.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 55,
                "idgaleria": 3,
                "titulo": "2021Nov18",
                "nome": "2021Nov18.jpeg",
                "tamanho": 63353,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001325_618f2d551f6a2.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 56,
                "idgaleria": 3,
                "titulo": "2021Nov19",
                "nome": "2021Nov19.jpeg",
                "tamanho": 100527,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001325_618f2d5536827.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 57,
                "idgaleria": 3,
                "titulo": "2021Nov20",
                "nome": "2021Nov20.jpeg",
                "tamanho": 74861,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001325_618f2d555fd02.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 58,
                "idgaleria": 3,
                "titulo": "2021Nov21",
                "nome": "2021Nov21.jpeg",
                "tamanho": 106051,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001329_618f2d59ce5da.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 59,
                "idgaleria": 3,
                "titulo": "2021Nov22",
                "nome": "2021Nov22.jpeg",
                "tamanho": 77588,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001330_618f2d5a12a64.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 60,
                "idgaleria": 3,
                "titulo": "2021Nov23",
                "nome": "2021Nov23.jpeg",
                "tamanho": 170371,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001330_618f2d5a28e6f.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 2,
        "nome": "Setembro 2021",
        "data_base": "2021-09-01",
        "quantidade_midias": null,
        "data_cad": "2021-10-18 12:17:14",
        "midias": [
            {
                "idmidia": 24,
                "idgaleria": 2,
                "titulo": "2021Set1",
                "nome": "2021Set1.jpeg",
                "tamanho": 306853,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121830_616d9046b2648.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 25,
                "idgaleria": 2,
                "titulo": "2021Set2",
                "nome": "2021Set2.jpeg",
                "tamanho": 299985,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d904702dc4.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 26,
                "idgaleria": 2,
                "titulo": "2021Set3",
                "nome": "2021Set3.jpeg",
                "tamanho": 303127,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d904739cd7.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 27,
                "idgaleria": 2,
                "titulo": "2021Set4",
                "nome": "2021Set4.jpeg",
                "tamanho": 277497,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d9047645a8.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 28,
                "idgaleria": 2,
                "titulo": "2021Set5",
                "nome": "2021Set5.jpeg",
                "tamanho": 317479,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d904782328.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 29,
                "idgaleria": 2,
                "titulo": "2021Set6",
                "nome": "2021Set6.jpeg",
                "tamanho": 291575,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d9047a5e6b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 30,
                "idgaleria": 2,
                "titulo": "2021Set7",
                "nome": "2021Set7.jpeg",
                "tamanho": 247910,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d9047b811b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 31,
                "idgaleria": 2,
                "titulo": "2021Set8",
                "nome": "2021Set8.jpeg",
                "tamanho": 256720,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121831_616d9047e2524.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 32,
                "idgaleria": 2,
                "titulo": "2021Set9",
                "nome": "2021Set9.jpeg",
                "tamanho": 322523,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121832_616d904809f00.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 33,
                "idgaleria": 2,
                "titulo": "2021Set10",
                "nome": "2021Set10.jpeg",
                "tamanho": 316265,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121832_616d90482d5cc.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 34,
                "idgaleria": 2,
                "titulo": "2021Set11",
                "nome": "2021Set11.jpeg",
                "tamanho": 272117,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121837_616d904d907ed.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 35,
                "idgaleria": 2,
                "titulo": "2021Set12",
                "nome": "2021Set12.jpeg",
                "tamanho": 227430,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121837_616d904dba26a.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 36,
                "idgaleria": 2,
                "titulo": "2021Set13",
                "nome": "2021Set13.jpeg",
                "tamanho": 236909,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121837_616d904df0073.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 37,
                "idgaleria": 2,
                "titulo": "2021Set14",
                "nome": "2021Set14.jpeg",
                "tamanho": 240912,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018121838_616d904e14a97.jpeg",
                "thumbnail": null
            }
        ]
    }
]))