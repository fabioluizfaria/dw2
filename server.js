const http = require("http");

const servidor = http.createServer(function (req, resp){
    
    let html = '';

    if (req.url == '/') {
        html = 
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1>Desenvolvimento web II</h1>
                    </body>
                </html>
            `;
    } else if (req.url == '/sobre') {
        html = 
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Sobre</h1>
                </body>
            </html>
        `;
    }

    resp.end(html);

});

servidor.listen(3000);