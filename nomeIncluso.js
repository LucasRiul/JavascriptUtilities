function run(body, nome){

    body = body.items;
    
    let cliente = body.filter(x => retira_acentos(x.name.trim().toLowerCase()).includes(retira_acentos(nome.trim().toLowerCase())) || retira_acentos(nome.trim().toLowerCase()).includes(retira_acentos(x.name.trim().toLowerCase())))

    return cliente;
}

function retira_acentos(str) 
{
    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}

console.log(run({
    "items": [
        {
            "id": "MTcxMjg0OTo0MDQwOA==",
            "name": "Karoline",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "OGUzODVmNGMtZjY2Yy00OTNlLWJjMjktNjRkYWYwYzc4MzNmOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-19T16:31:18Z",
            "contact": {
                "email": "karoline.carvalho@integraurbano.com.br",
                "phone": null
            },
            "address": {
                "zipCode": "01419002",
                "street": "Alameda Santos",
                "number": "2209",
                "neighborhood": null,
                "complement": null,
                "city": "São Paulo",
                "state": "São Paulo",
                "formattedAddress": "Alameda Santos, 2209 - São Paulo - São Paulo, 01419-002",
                "coords": {
                    "latitude": -23.559051,
                    "longitude": -46.661727
                }
            },
            "statistics": {
                "updatedAt": "2022-07-11T09:11:28.332Z",
                "service": {
                    "firstAt": "2021-05-19T21:16:01.000Z",
                    "lastAt": "2021-05-19T21:16:01.000Z",
                    "total": 1
                },
                "rating": {
                    "averageStars": 4,
                    "lastComment": "Engenheiro mão no bolso! \nGrandee Fernandãoo!",
                    "lastStar": 4
                }
            }
        },
        {
            "id": "MTcxNjE2ODo0MDQwOA==",
            "name": "Casanova 43 - Raphael Pereira de Paula Sar Israel",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "NWZiNTcxMTYtNWRhNS00MmQwLWEyNmUtODQ0NTUwYmYwNDE0OjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T19:37:31Z",
            "contact": {
                "email": "raphasar_israel@globomail.com",
                "phone": "11979717752"
            },
            "address": {
                "zipCode": "08664000",
                "street": "Avenida Manoel Casanova",
                "number": "1150",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1150 - Parque Santa Rosa, Suzano - SP, 08664-000, Brasil",
                "coords": {
                    "latitude": -23.567025,
                    "longitude": -46.32233
                }
            },
            "statistics": {
                "updatedAt": "2022-07-11T09:11:28.332Z",
                "service": {
                    "firstAt": null,
                    "lastAt": null,
                    "total": 2
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjE3Nzo0MDQwOA==",
            "name": "Casanova 126 - Ariana de Oliveira Guimarães",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "NjkzOTQzMmUtYmVjZi00YzAyLWFhYzAtMTI2NTBlMTliMDBlOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T19:43:38Z",
            "contact": {
                "email": "ariana.og@hotmail.com",
                "phone": null
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": null,
                "service": {
                    "firstAt": null,
                    "lastAt": null,
                    "total": 0
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjE4Mjo0MDQwOA==",
            "name": "Casanova 139 - Gustavo Machado Pereira",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "OTAxZjY5MTgtMzNkZC00YzM4LTlkM2EtYjNiYWNlNDI1N2RjOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T19:46:47Z",
            "contact": {
                "email": null,
                "phone": null
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": "2022-07-11T09:11:28.332Z",
                "service": {
                    "firstAt": "2021-09-01T13:49:17.000Z",
                    "lastAt": "2022-02-09T13:50:44.000Z",
                    "total": 4
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjE5NTo0MDQwOA==",
            "name": "Casanova 12 - Erick Carvalho da Silva",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "MGU3YjQ2MDQtNWVmOS00NDk2LTkyMWYtNGJhNjBjZWM4MzJjOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T19:51:18Z",
            "contact": {
                "email": null,
                "phone": null
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": "2022-07-11T09:11:28.332Z",
                "service": {
                    "firstAt": "2022-02-04T14:05:44.000Z",
                    "lastAt": "2022-04-14T11:49:01.000Z",
                    "total": 4
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjIxODo0MDQwOA==",
            "name": "Casanova 196 - Felipe Carrião Portella",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "N2MzYmVkMmUtZGYzOS00ZjM5LTk0MDktMzllOWQ2YWYzZmVhOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T20:02:19Z",
            "contact": {
                "email": "vportella79@gmail.com",
                "phone": "11945496066"
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": null,
                "service": {
                    "firstAt": null,
                    "lastAt": null,
                    "total": 0
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjIzMzo0MDQwOA==",
            "name": "Casanova 195 - Agnes Harumi Lopes Sesoko",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "NDJjODI5NzktMDNiNy00NzU2LTgwOTQtY2UyMzc5YTAwYTlhOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T20:08:34Z",
            "contact": {
                "email": "agnesesoko@gmail.com",
                "phone": "11967179823"
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": null,
                "service": {
                    "firstAt": null,
                    "lastAt": null,
                    "total": 0
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjIzOTo0MDQwOA==",
            "name": "Casanova 158 - Karen",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "ZDdjZTlhMmUtOWYzMC00YjgyLWJhMGQtZjNkMTBjNTMyMGU3OjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T20:11:24Z",
            "contact": {
                "email": null,
                "phone": null
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": "2022-07-11T09:11:28.332Z",
                "service": {
                    "firstAt": "2022-04-19T18:12:48.000Z",
                    "lastAt": "2022-04-19T18:12:48.000Z",
                    "total": 1
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjI0OTo0MDQwOA==",
            "name": "Casanova 8 - Leandro da Cruz Santos",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "ZTc0ZDNkNjQtZjNlOC00NmU0LTlkMjktN2Q2ZjBkMDEyZTEwOjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T20:15:46Z",
            "contact": {
                "email": null,
                "phone": null
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": null,
                "service": {
                    "firstAt": null,
                    "lastAt": null,
                    "total": 0
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        },
        {
            "id": "MTcxNjI1NTo0MDQwOA==",
            "name": "Casanova 192 - Regina Félix dos Santos Ricarte",
            "code": null,
            "notes": null,
            "documentNumber": null,
            "primaryLocation": {
                "id": "OGVlMjA4YmUtNmY3ZS00NmFlLTkyMGYtY2U0YzY4ZDU1NjM5OjQwNDA4"
            },
            "archived": false,
            "createdAt": "2021-05-21T20:18:50Z",
            "contact": {
                "email": "reginafelixsantosricarte@gmail.com",
                "phone": "11954303517"
            },
            "address": {
                "zipCode": "08664565",
                "street": "Avenida Manoel Casanova",
                "number": "1130",
                "neighborhood": "Parque Santa Rosa",
                "complement": null,
                "city": "Suzano",
                "state": "São Paulo",
                "formattedAddress": "Av. Manoel Casanova, 1130 - Parque Santa Rosa, Suzano - SP, 08664-565, Brasil",
                "coords": {
                    "latitude": -23.566772,
                    "longitude": -46.322304
                }
            },
            "statistics": {
                "updatedAt": null,
                "service": {
                    "firstAt": null,
                    "lastAt": null,
                    "total": 0
                },
                "rating": {
                    "averageStars": 0,
                    "lastComment": null,
                    "lastStar": 0
                }
            }
        }
    ],
    "totalCount": 240
},'karol'))