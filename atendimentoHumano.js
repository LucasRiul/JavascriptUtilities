function run(input) {
    console.log(input)
    input = input.toString();
    input = input.replace(/\\n/g, " ").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, " ").replace(/\\t/g, " ").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
    input = input.replace(/[\u0000-\u0019]+/g, "");
    // input = JSON.parse(input);
    return input;
}

console.log(run({
    "type": "application/vnd.lime.collection+json",
    "resource": {
        "total": 3,
        "itemType": "application/vnd.iris.thread-message+json",
        "items": [
            {
                "id": "45fc1bda-66cd-44e9-a70e-018265780894",
                "direction": "received",
                "type": "application/vnd.iris.ticket+json",
                "content": {
                    "id": "45fc1bda-66cd-44e9-a70e-018265780894",
                    "sequentialId": 43,
                    "ownerIdentity": "atendimentohumano617@msging.net",
                    "customerIdentity": "5706f0d5-3505-491e-893b-c38898a9a22f.atendimentohumano617@0mn.io",
                    "customerDomain": "0mn.io",
                    "provider": "Lime",
                    "status": "Waiting",
                    "storageDate": "2022-08-03T20:49:01.588Z",
                    "externalId": "45fc1bda-66cd-44e9-a70e-018265780894",
                    "rating": 0,
                    "unreadMessages": 0,
                    "closed": false,
                    "customerInput": {
                        "type": "text/plain",
                        "value": "oi"
                    },
                    "priority": 0
                },
                "date": "2022-08-03T20:49:01.657Z"
            },
            {
                "id": "fwd:fwd:58178c60-cc9e-417b-83d4-2e3e777e54de",
                "direction": "sent",
                "type": "text/plain",
                "content": "testse",
                "date": "2022-08-03T20:49:11.375Z",
                "status": "consumed",
                "metadata": {
                    "#messageEmitter": "Human",
                    "uber-trace-id": "f1674cb4015e6c2a%3A1b526f612f71fd61%3A452a863cf544f5ea%3A1",
                    "#uniqueId": "42270346-4702-410f-9ec7-89d9266599b5",
                    "date_created": "1659559751290",
                    "$originator": "atendimentohumano617@msging.net",
                    "$claims": "Node=atendimentohumano617@msging.net/iris-hosted-7;Identity=atendimentohumano617@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "42270346-4702-410f-9ec7-89d9266599b5",
                    "$originatorSessionRemoteNode": "enterprise.builder.hosting@msging.net/#iris-hosted-7",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0561587"
                }
            },
            {
                "id": "17bc6a73-0fe1-4dd5-8bea-e88f33e978ff",
                "direction": "received",
                "type": "text/plain",
                "content": "testes magit",
                "date": "2022-08-03T20:49:15.447Z",
                "status": "consumed",
                "metadata": {
                    "builder.trace.mode": "All",
                    "builder.trace.target": "blippartner%40mag-it.com.br@blip.ai/debug-blippartner%40mag-it.com.br",
                    "builder.trace.targetType": "Lime",
                    "#uniqueId": "9269c22c-0a4f-44c4-b9f3-2d428834cd59",
                    "date_created": "1659559755362",
                    "uber-trace-id": "b6b69621208a4e2f%3Ab6b69621208a4e2f%3A0%3A1",
                    "$internalId": "9269c22c-0a4f-44c4-b9f3-2d428834cd59",
                    "$originatorSessionRemoteNode": "postmaster@0mn.io/#iris-hosted-4",
                    "$elapsedTimeToStorage": "00:00:00.0482829"
                }
            }
        ]
    },
    "method": "get",
    "status": "success",
    "id": "66b92e5e-79e3-45c6-83d0-59f58554b806",
    "from": "postmaster@desk.msging.net/!iris-hosted-4",
    "to": "integraurbanoroteador@msging.net/!iris-hosted-4-hzkz2nd7",
    "metadata": {
        "#command.uri": "lime://integraurbanoroteador@msging.net/tickets/45fc1bda-66cd-44e9-a70e-018265780894/messages?attendanceTranscriptionOnly=true",
        "uber-trace-id": "3de517fc304a7eff%3A1a80b7ab395ccdb1%3A3de517fc304a7eff%3A1"
    }
}))

