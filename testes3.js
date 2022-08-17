function run(input) {

    var messages = '';

    try {
        

        obj = input;

        i = 0;
        if (obj.resource.items.length > 0 || obj.resource.items) {
            while (obj.resource.items[i] != null && i < obj.resource.items.length) {
                var o = obj.resource.items[i];
                if (o != null) {
                    if (o.type == 'text/plain') {
                        if (o.direction == 'received') {
                            messages = messages + '\n[' + dateFormat(o.date) + '][Usuario] ' + o.content.replace("<b>", "").replace("</b>", "");
                        }
                        else {
                            messages = messages + '\n[' + dateFormat(o.date) + '][Atendente] ' + o.content.replace("<b>", "").replace("</b>", "");
                        }
                    }
                    else if (o.type == 'application/vnd.lime.select+json') {
                        t = '\n[' + dateFormat(o.date) + '][Atendente] ' + o.content.text;
                        for (var j = 0; j < o.content.options.length; j++) {
                            t = t + " - " + o.content.options[j].text.replace("<b>", "").replace("</b>", "");
                        }
                        messages = messages + t;
                    }
                    else if (o.type == 'application/vnd.lime.media-link+json') {
                        if (o.direction == 'received') {
                            messages = messages + '\n[' + dateFormat(o.date) + '][Usuario] <Mídia>';
                        }
                        else {
                            messages = messages + '\n[' + dateFormat(o.date) + '][Atendente] <Mídia>';
                        }
                    }
                    else if (o.type != 'application/vnd.iris.ticket+json') {
                        if (o.direction == 'received') {
                            messages = messages + '\n[' + dateFormat(o.date) + '][Usuario] Conteúdo indisponível';
                        }
                        else {
                            messages = messages + '\n[' + dateFormat(o.date) + '][Atendente] Conteúdo indisponível';
                        }
                    }


                }
                i = i + 1;
            }
        }
        // remove non-printable and other non-valid JSON chars
        input = input.toString().replace(/\\n/g, " ").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, " ").replace(/\\t/g, " ").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
        input = input.toString().replace(/[\u0000-\u0019]+/g, "");

        return messages.trim();

    }
    catch (e) {
        return e;
    }

}


function dateFormat(input) {
    let d = new Date(input);

    let dStr = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();
    dStr = dStr + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    return dStr;
}

console.log(lucas({"total":4,"itemType":"application/vnd.iris.thread-message+json","items":[{"id":"a6a7028c-11ac-4521-a867-0182a2e3cc13","direction":"received","type":"application/vnd.iris.ticket+json","content":{"id":"a6a7028c-11ac-4521-a867-0182a2e3cc13","sequentialId":13,"ownerIdentity":"historicoatendimentohumano@msging.net","customerIdentity":"6cb47a73-b80c-410c-b367-b05a26754562.historicoatendimentohumano@0mn.io","customerDomain":"0mn.io","provider":"Lime","status":"Waiting","storageDate":"2022-08-15T19:03:34.163Z","externalId":"a6a7028c-11ac-4521-a867-0182a2e3cc13","rating":0,"unreadMessages":0,"closed":false,"customerInput":{"type":"text/plain","value":"oi"},"priority":0},"date":"2022-08-15T19:03:34.194Z"},{"id":"fwd:fwd:9cf19576-df6e-460b-a317-216ac76e980f","direction":"sent","type":"text/plain","content":"oi lucas","date":"2022-08-15T19:03:57.924Z","status":"consumed","metadata":{"#messageEmitter":"Human","uber-trace-id":"d6c619fa9c05957a%3Ac4b396a5604b7a57%3A84303888a45a01c5%3A1","#uniqueId":"2e5dc5ed-2ab9-4440-afc8-340706abf2a2","date_created":"1660590237833","$originator":"historicoatendimentohumano@msging.net","$claims":"Node=historicoatendimentohumano@msging.net/msging-application-builder-hosting-standard-7b758bdb5f-nh5bc;Identity=historicoatendimentohumano@msging.net;DomainRole=Member;AuthenticationScheme=Transport","$internalId":"2e5dc5ed-2ab9-4440-afc8-340706abf2a2","$originatorSessionRemoteNode":"builder.hosting@msging.net/#msging-application-builder-hosting-standard-7b758bdb5f-nh5bc","#messageKind":"Response","$elapsedTimeToStorage":"00:00:00.0469786"}},{"id":"fwd:fwd:3f3c50f1-1d46-4902-9e75-a17d6696674f","direction":"sent","type":"text/plain","content":"teste","date":"2022-08-15T19:03:58.835Z","status":"consumed","metadata":{"#messageEmitter":"Human","uber-trace-id":"eb3c8ce53375d7cf%3A9bcc5604dd5e0932%3A2199fd3369580b20%3A1","#uniqueId":"beab1e84-9365-499a-af8a-653f6b08ae45","date_created":"1660590238660","$originator":"historicoatendimentohumano@msging.net","$claims":"Node=historicoatendimentohumano@msging.net/msging-application-builder-hosting-standard-7b758bdb5f-nh5bc;Identity=historicoatendimentohumano@msging.net;DomainRole=Member;AuthenticationScheme=Transport","$internalId":"beab1e84-9365-499a-af8a-653f6b08ae45","$originatorSessionRemoteNode":"builder.hosting@msging.net/#msging-application-builder-hosting-standard-7b758bdb5f-nh5bc","#messageKind":"Response","$elapsedTimeToStorage":"00:00:00.1226723"}},{"id":"6eb30f31-1610-434c-9639-ba2344d687f8","direction":"received","type":"text/plain","content":"oi","date":"2022-08-15T19:04:01.609Z","status":"consumed","metadata":{"builder.trace.mode":"All","builder.trace.target":"lucas.martins%40sou.unaerp.edu.br@blip.ai/debug-lucas.martins%40sou.unaerp.edu.br","builder.trace.targetType":"Lime","#uniqueId":"18084f2c-b3b3-48fb-b43c-b533e81cc11e","date_created":"1660590241546","uber-trace-id":"d712202b99c384d2%3Ad712202b99c384d2%3A0%3A1","$internalId":"18084f2c-b3b3-48fb-b43c-b533e81cc11e","$originatorSessionRemoteNode":"postmaster@0mn.io/#iris-hosted-8","$elapsedTimeToStorage":"00:00:00.0276834"}}]}))
