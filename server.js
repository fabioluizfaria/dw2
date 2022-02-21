const express = require("express");
const app = express();

app.use('/bscss', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popperjs', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/imagens', express.static(__dirname + '/src/app/imagens'));
app.use('/css', express.static(__dirname + '/src/app/css'));

app.listen(3000,function(){
    console.log('Servidor rodando na porta 3000');
});

app.get('/personalidadesNegras',function(req, resp){
    resp.sendFile(__dirname + '/src/app/PersonalidadesNegras.html');
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
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Sobre</h1>
            </body>
        </html>
        `
    );
});

// const servidor = http.createServer(function (req, resp){
    
//     let html = '';

//     if (req.url == '/') {
//         html = 
//             `
//                 <html>
//                     <head>
//                         <meta charset="utf-8">
//                     </head>
//                     <body>
//                         <h1>Desenvolvimento web II</h1>
//                     </body>
//                 </html>
//             `;
//     } else if (req.url == '/sobre') {
//         html = 
//         `
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1>Sobre</h1>
//                 </body>
//             </html>
//         `;
//     }

//     resp.end(html);

// });

// servidor.listen(3000);