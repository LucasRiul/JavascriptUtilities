function run(body) {
    let formmatedJson = /*JSON.parse( */ body /* ) */;
    let uris = [];

    for (let i = 0; i < formmatedJson.length; i++) {
        uris.push(formmatedJson[i].midias.map(x => x.url));
    }

    for (let i = 0; i < uris.length; i++) {
        var listaImagens = uris[i].concat(uris[i - 1]);
    }

    for (let i = 0; i < listaImagens.length; i++) {
        listaImagens[i] = listaImagens[i].replace("[[LARGURA]]/[[ALTURA]]", "480/480");
    }

    return listaImagens;
}

console.log(run([
    {
        "idgaleria": 4,
        "nome": "Novembro 2021",
        "data_base": "2021-11-01",
        "quantidade_midias": null,
        "data_cad": "2021-11-13 00:16:32",
        "midias": [
            {
                "idmidia": 61,
                "idgaleria": 4,
                "titulo": "2021Nov1",
                "nome": "2021Nov1.jpeg",
                "tamanho": 99045,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5c41086.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 62,
                "idgaleria": 4,
                "titulo": "2021Nov2",
                "nome": "2021Nov2.jpeg",
                "tamanho": 150073,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5c8026a.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 63,
                "idgaleria": 4,
                "titulo": "2021Nov3",
                "nome": "2021Nov3.jpeg",
                "tamanho": 37555,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5c9c68c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 64,
                "idgaleria": 4,
                "titulo": "2021Nov4",
                "nome": "2021Nov4.jpeg",
                "tamanho": 108734,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5cb4158.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 65,
                "idgaleria": 4,
                "titulo": "2021Nov5",
                "nome": "2021Nov5.jpeg",
                "tamanho": 67255,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5ccdff1.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 66,
                "idgaleria": 4,
                "titulo": "2021Nov6",
                "nome": "2021Nov6.jpeg",
                "tamanho": 92362,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5cdddee.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 67,
                "idgaleria": 4,
                "titulo": "2021Nov7",
                "nome": "2021Nov7.jpeg",
                "tamanho": 91800,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001748_618f2e5cf3ef6.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 68,
                "idgaleria": 4,
                "titulo": "2021Nov8",
                "nome": "2021Nov8.jpeg",
                "tamanho": 104016,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001749_618f2e5d1017d.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 69,
                "idgaleria": 4,
                "titulo": "2021Nov9",
                "nome": "2021Nov9.jpeg",
                "tamanho": 95116,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001749_618f2e5d2f4d2.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 70,
                "idgaleria": 4,
                "titulo": "2021Nov10",
                "nome": "2021Nov10.jpeg",
                "tamanho": 92944,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001749_618f2e5d3f2aa.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 71,
                "idgaleria": 4,
                "titulo": "2021Nov11",
                "nome": "2021Nov11.jpeg",
                "tamanho": 74172,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e612059c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 72,
                "idgaleria": 4,
                "titulo": "2021Nov12",
                "nome": "2021Nov12.jpeg",
                "tamanho": 70028,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e614b51b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 73,
                "idgaleria": 4,
                "titulo": "2021Nov13",
                "nome": "2021Nov13.jpeg",
                "tamanho": 72643,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e615c2de.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 74,
                "idgaleria": 4,
                "titulo": "2021Nov14",
                "nome": "2021Nov14.jpeg",
                "tamanho": 90198,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e616ece3.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 75,
                "idgaleria": 4,
                "titulo": "2021Nov15",
                "nome": "2021Nov15.jpeg",
                "tamanho": 101457,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e617e335.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 76,
                "idgaleria": 4,
                "titulo": "2021Nov16",
                "nome": "2021Nov16.jpeg",
                "tamanho": 27658,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e6190c5c.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 77,
                "idgaleria": 4,
                "titulo": "2021Nov17",
                "nome": "2021Nov17.jpeg",
                "tamanho": 44849,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e619e5ea.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 78,
                "idgaleria": 4,
                "titulo": "2021Nov18",
                "nome": "2021Nov18.jpeg",
                "tamanho": 37691,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e61b66dd.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 79,
                "idgaleria": 4,
                "titulo": "2021Nov19",
                "nome": "2021Nov19.jpeg",
                "tamanho": 37107,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e61d4f27.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 80,
                "idgaleria": 4,
                "titulo": "2021Nov20",
                "nome": "2021Nov20.jpeg",
                "tamanho": 35892,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001753_618f2e61e2154.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 81,
                "idgaleria": 4,
                "titulo": "2021Nov21",
                "nome": "2021Nov21.jpeg",
                "tamanho": 32941,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e65516cc.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 82,
                "idgaleria": 4,
                "titulo": "2021Nov22",
                "nome": "2021Nov22.jpeg",
                "tamanho": 72366,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e6574607.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 83,
                "idgaleria": 4,
                "titulo": "2021Nov23",
                "nome": "2021Nov23.jpeg",
                "tamanho": 35017,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e6582de8.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 84,
                "idgaleria": 4,
                "titulo": "2021Nov24",
                "nome": "2021Nov24.jpeg",
                "tamanho": 107927,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e6594606.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 85,
                "idgaleria": 4,
                "titulo": "2021Nov25",
                "nome": "2021Nov25.jpeg",
                "tamanho": 142196,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e65a37dc.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 86,
                "idgaleria": 4,
                "titulo": "2021Nov26",
                "nome": "2021Nov26.jpeg",
                "tamanho": 136269,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e65bd68b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 87,
                "idgaleria": 4,
                "titulo": "2021Nov27",
                "nome": "2021Nov27.jpeg",
                "tamanho": 74495,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001757_618f2e65db156.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 88,
                "idgaleria": 4,
                "titulo": "2021Nov28",
                "nome": "2021Nov28.jpeg",
                "tamanho": 95432,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211113001758_618f2e66032e5.jpeg",
                "thumbnail": null
            }
        ]
    },
    {
        "idgaleria": 1,
        "nome": "Setembro 2021",
        "data_base": "2021-09-01",
        "quantidade_midias": null,
        "data_cad": "2021-10-18 11:28:16",
        "midias": [
            {
                "idmidia": 1,
                "idgaleria": 1,
                "titulo": "Set1",
                "nome": "Set1.jpeg",
                "tamanho": 84741,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113045_616d85150492a.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 2,
                "idgaleria": 1,
                "titulo": "Set2",
                "nome": "Set2.jpeg",
                "tamanho": 111415,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113045_616d851570522.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 3,
                "idgaleria": 1,
                "titulo": "Set3",
                "nome": "Set3.jpeg",
                "tamanho": 153005,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113045_616d85159956e.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 4,
                "idgaleria": 1,
                "titulo": "Set4",
                "nome": "Set4.jpeg",
                "tamanho": 145598,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113045_616d8515efe12.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 5,
                "idgaleria": 1,
                "titulo": "Set5",
                "nome": "Set5.jpeg",
                "tamanho": 226275,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113046_616d851617fb7.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 6,
                "idgaleria": 1,
                "titulo": "Set6",
                "nome": "Set6.jpeg",
                "tamanho": 142308,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113046_616d851654d4d.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 7,
                "idgaleria": 1,
                "titulo": "Set7",
                "nome": "Set7.jpeg",
                "tamanho": 146055,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113046_616d85167182d.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 8,
                "idgaleria": 1,
                "titulo": "Set8",
                "nome": "Set8.jpeg",
                "tamanho": 167355,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113046_616d851694578.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 9,
                "idgaleria": 1,
                "titulo": "Set9",
                "nome": "Set9.jpeg",
                "tamanho": 137375,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113046_616d8516bdf56.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 10,
                "idgaleria": 1,
                "titulo": "Set10",
                "nome": "Set10.jpeg",
                "tamanho": 139614,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113046_616d8516e2de3.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 11,
                "idgaleria": 1,
                "titulo": "Set11",
                "nome": "Set11.jpeg",
                "tamanho": 157526,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113102_616d852608c77.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 12,
                "idgaleria": 1,
                "titulo": "Set12",
                "nome": "Set12.jpeg",
                "tamanho": 120256,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113102_616d8526641bd.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 13,
                "idgaleria": 1,
                "titulo": "Set13",
                "nome": "Set13.jpeg",
                "tamanho": 238685,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113102_616d85269ab6b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 14,
                "idgaleria": 1,
                "titulo": "Set14",
                "nome": "Set14.jpeg",
                "tamanho": 203507,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113102_616d8526badc5.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 15,
                "idgaleria": 1,
                "titulo": "Set15",
                "nome": "Set15.jpeg",
                "tamanho": 218879,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113102_616d8526df29b.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 16,
                "idgaleria": 1,
                "titulo": "Set16",
                "nome": "Set16.jpeg",
                "tamanho": 99209,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113103_616d852712970.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 17,
                "idgaleria": 1,
                "titulo": "Set17",
                "nome": "Set17.jpeg",
                "tamanho": 115512,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113103_616d85273457e.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 18,
                "idgaleria": 1,
                "titulo": "Set18",
                "nome": "Set18.jpeg",
                "tamanho": 142149,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113103_616d852755b45.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 19,
                "idgaleria": 1,
                "titulo": "Set19",
                "nome": "Set19.jpeg",
                "tamanho": 331053,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113103_616d85276b882.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 20,
                "idgaleria": 1,
                "titulo": "Set20",
                "nome": "Set20.jpeg",
                "tamanho": 265773,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113103_616d85278b3ab.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 21,
                "idgaleria": 1,
                "titulo": "Set21",
                "nome": "Set21.jpeg",
                "tamanho": 229972,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113111_616d852f7734e.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 22,
                "idgaleria": 1,
                "titulo": "Set22",
                "nome": "Set22.jpeg",
                "tamanho": 261125,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113111_616d852fcfc4f.jpeg",
                "thumbnail": null
            },
            {
                "idmidia": 23,
                "idgaleria": 1,
                "titulo": "Set23",
                "nome": "Set23.jpeg",
                "tamanho": 281059,
                "tipo": "image/jpeg",
                "url": "https://integra.cvcrm.com.br/api/get/imagens/empreendimentos_estagios_obra_galerias_midias/[[LARGURA]]/[[ALTURA]]/20211018113111_616d852ff0cdc.jpeg",
                "thumbnail": null
            }
        ]
    }
]))