const http = require('http');

function get_numbers(input) {
    return (input.match(/[0-9]+/g)).map(i=>Number(i));
}

const requestListener = function (req, res) {
    if(req.url==='/')
    {
        res.writeHead(200);
        res.end(req.url);
    }
    if(req.url.includes('/add?'))
    {
        res.writeHead(200);
        res.end("Numbers: "+String(get_numbers(req.url))+" Res: "+get_numbers(req.url).reduce((a, b) => a + b, 0));
    }
    if(req.url.includes('/sub?'))
    {
        res.writeHead(200);
        var felement=get_numbers(req.url)[0];
        var total=get_numbers(req.url).reduce((a, b) => a + b, 0);

        res.end("Numbers: "+String(get_numbers(req.url))+" Res: "+String(felement-total+felement));
    }
    if(req.url.includes('/mul?'))
    {
        res.writeHead(200);
        res.end("Numbers: "+String(get_numbers(req.url))+" Res: "+get_numbers(req.url).reduce((a, b) => a * b, 1));
    }
    if(req.url.includes('/div?'))
    {
        res.writeHead(200);
        var felement=get_numbers(req.url)[0];
        var arrayLength = get_numbers(req.url).length;
        for (var i = 1; i < arrayLength; i++) {
            felement=felement/get_numbers(req.url)[i];
        }
        res.end("Numbers: "+String(get_numbers(req.url))+" Res: "+felement);
    }
    else
    {
        res.writeHead(200);
        res.end("Error 1");
    }

}

const server = http.createServer(requestListener);
server.listen(8080);