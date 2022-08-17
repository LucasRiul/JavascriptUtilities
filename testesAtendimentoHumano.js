function run(input) {

    var messages = '';

    try {



        let obj = input;

        let i = 0;
        while (obj["resource"]["items"][i] != null && i < obj["resource"]["items"].length) {
            var o = obj["resource"]["items"][i];
            if (o != null) {
                if (o["type"] == 'text/plain') {
                    if (o["direction"] == 'received') {
                        messages = messages + '[' + dateFormat(o["date"]) + '][Usuario] ' + o["content"].replace("<b>", "").replace("</b>", "");
                    }
                    else {
                        messages = messages + '[' + dateFormat(o["date"]) + '][Atendente] ' + o["content"].replace("<b>", "").replace("</b>", "");
                    }
                }
                else if (o["type"] == 'application/vnd.lime.select+json') {
                    t = '[' + dateFormat(o["date"]) + '][Atendente] ' + o["content"]["text"];
                    for (var j = 0; j < o["content"]["options"].length; j++) {
                        t = t + " - " + o["content"]["options"][j]["text"].replace("<b>", "").replace("</b>", "");
                    }
                    messages = messages + t;
                }
                else if (o["type"] == 'application/vnd.lime.media-link+json') {
                    if (o["direction"] == 'received') {
                        messages = messages + '[' + dateFormat(o["date"]) + '][Usuario] <Mídia>';
                    }
                    else {
                        messages = messages + '[' + dateFormat(o["date"]) + '][Atendente] <Mídia>';
                    }
                }
                else if (o["type"] != 'application/vnd.iris.ticket+json') {
                    if (o["direction"] == 'received') {
                        messages = messages + '[' + dateFormat(o["date"]) + '][Usuario] Conteúdo indisponível';
                    }
                    else {
                        messages = messages + '[' + dateFormat(o["date"]) + '][Atendente] Conteúdo indisponível';
                    }
                }
                input = input.toString();

                // remove non-printable and other non-valid JSON chars
                input = input.replace(/\\n/g, " ").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, " ").replace(/\\t/g, " ").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
                input = input.replace(/[\u0000-\u0019]+/g, "");


            }
            i = i + 1;
        }

    }
    catch (e) {
        
    }
    return messages.trim();
}


function dateFormat(dataAtendimento) {
    let d = new Date(dataAtendimento);

    let dStr = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();
    dStr = dStr + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    return dStr;
}

console.log(run({
    "type": "application/vnd.lime.collection+json",
    "resource": {
        "total": 4,
        "itemType": "application/vnd.iris.thread-message+json",
        "items": [
            {
                "id": "46283369-3029-4f34-adc3-018264ff65b8",
                "direction": "received",
                "type": "application/vnd.iris.ticket+json",
                "content": {
                    "id": "46283369-3029-4f34-adc3-018264ff65b8",
                    "sequentialId": 35,
                    "ownerIdentity": "atendimentohumano617@msging.net",
                    "customerIdentity": "8b8c978d-40d4-476b-a0e9-28ab43ba2bc9.atendimentohumano617@0mn.io",
                    "customerDomain": "0mn.io",
                    "provider": "Lime",
                    "status": "Waiting",
                    "storageDate": "2022-08-03T18:37:15.576Z",
                    "externalId": "46283369-3029-4f34-adc3-018264ff65b8",
                    "rating": 0,
                    "unreadMessages": 0,
                    "closed": false,
                    "customerInput": {
                        "type": "text/plain",
                        "value": "oi"
                    },
                    "priority": 0
                },
                "date": "2022-08-03T18:37:15.594Z"
            },
            {
                "id": "fwd:fwd:c5ef8560-25f1-45f5-bf4d-3685dff1608c",
                "direction": "sent",
                "type": "text/plain",
                "content": "oi",
                "date": "2022-08-03T18:37:25.942Z",
                "status": "consumed",
                "metadata": {
                    "#messageEmitter": "Human",
                    "uber-trace-id": "feb34398c3690614%3A3d52d94dcb35f569%3A9199bf5b3380cd17%3A1",
                    "#uniqueId": "06b161ba-55fe-41bf-a15c-6852b1d8d27a",
                    "date_created": "1659551845838",
                    "$originator": "atendimentohumano617@msging.net",
                    "$claims": "Node=atendimentohumano617@msging.net/iris-hosted-7;Identity=atendimentohumano617@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "06b161ba-55fe-41bf-a15c-6852b1d8d27a",
                    "$originatorSessionRemoteNode": "enterprise.builder.hosting@msging.net/#iris-hosted-7",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0537352"
                }
            },
            {
                "id": "182e4f77-b37b-4321-a4a0-3f4a593cd84c",
                "direction": "received",
                "type": "text/plain",
                "content": "teste magit",
                "date": "2022-08-03T18:37:29.863Z",
                "status": "consumed",
                "metadata": {
                    "builder.trace.mode": "All",
                    "builder.trace.target": "blippartner%40mag-it.com.br@blip.ai/debug-blippartner%40mag-it.com.br-444",
                    "builder.trace.targetType": "Lime",
                    "#uniqueId": "a06d928d-b098-4c9e-809f-0fb09849515f",
                    "date_created": "1659551849788",
                    "uber-trace-id": "f076e5241b77d08f%3Af076e5241b77d08f%3A0%3A1",
                    "$internalId": "a06d928d-b098-4c9e-809f-0fb09849515f",
                    "$originatorSessionRemoteNode": "postmaster@0mn.io/#iris-hosted-2",
                    "$elapsedTimeToStorage": "00:00:00.0466142"
                }
            },
            {
                "id": "fwd:fwd:4d9f9eb8-4fe3-49d7-bff0-9d53ebfc027b",
                "direction": "sent",
                "type": "text/plain",
                "content": "positivo",
                "date": "2022-08-03T18:37:34.207Z",
                "status": "consumed",
                "metadata": {
                    "#messageEmitter": "Human",
                    "uber-trace-id": "9eed5fa03ebef059%3Abd70f3ca9a3787f9%3A7b28033b6f0d4d18%3A1",
                    "#uniqueId": "9090b33d-764a-4b36-88e7-4a2913b8ed3c",
                    "date_created": "1659551854110",
                    "$originator": "atendimentohumano617@msging.net",
                    "$claims": "Node=atendimentohumano617@msging.net/iris-hosted-7;Identity=atendimentohumano617@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "9090b33d-764a-4b36-88e7-4a2913b8ed3c",
                    "$originatorSessionRemoteNode": "enterprise.builder.hosting@msging.net/#iris-hosted-7",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0538784"
                }
            }
        ]
    },
    "method": "get",
    "status": "success",
    "id": "{{random.guid}}",
    "from": "postmaster@desk.msging.net/!iris-hosted-4",
    "to": "atendimentohumano617@msging.net/!iris-hosted-4-mnorixm0",
    "metadata": {
        "#command.uri": "lime://atendimentohumano617@msging.net/tickets/46283369-3029-4f34-adc3-018264ff65b8/messages?attendanceTranscriptionOnly=true",
        "uber-trace-id": "4cc9ae4472594c1a%3Ab1425fb955ec5bf7%3A4cc9ae4472594c1a%3A1"
    }
}))