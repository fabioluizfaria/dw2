const express = require("express");
const res = require("express/lib/response");
const app = express();

/**
 * Caminhos estáticos
 */
app.use('/bscss', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popperjs', express.static(__dirname + '/node_modules/popper.js/dist/umd'));


app.listen(3000,function(){
    console.log('Servidor rodando na porta 3000');
});

app.get('/',function(req, resp){
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Desenvolvimento web II</h1>
            </body>
        </html>
        `
    );
});

app.get('/sobre',function(req, resp){
    let x = 10;
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Estou na pagina SOBRE. E tenho a variável x que vale ${x}</h1>
            </body>
        </html>
        `
    );
});

app.get('/inicio',function(req, resp){
    resp.sendFile(__dirname + '/inicio.html')
});

app.get('/inicio_cdn',function(req, resp){
    resp.sendFile(__dirname + '/inicio_cdn.html')
});