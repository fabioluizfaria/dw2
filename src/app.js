import express from 'express';

const app = express();

/**
 * Configurações estáticas
 */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/popper.js/dist/umd'));
app.use('/publico', express.static(__dirname + '/publico'));

/**
 * Rotas da aplicação
 */
app.get('/personalidadesNegras', function (req, resp) {
    resp.sendFile(__dirname + '/views/PersonalidadesNegras.html');
});

app.get('/', function (req, resp) {
    resp.sendFile(__dirname + '/views/PersonalidadesNegras.html');
});

export default app;