//Encapsulando Rotas 
//const db = require('../config/database');
module.exports = (app) =>{
    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Index</h1>
                    </body> 
                </html>
            `
        );
    });
//markojs -  Serve para gerar templates HTML. Inclusive, ele funciona muito bem com o express
//https://markojs.com/docs/express/


/*app.get('/livros', function(req, resp) {
    db.all('SELECT * FROM livros', function(erro, resultados) {

        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: resultados
            }

        );

    });


});*/

    app.get('/livros', function(req, resp) {
        resp.marko(
            require("../app/views/livros/listas/lista.marko"),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }

        );
    });
    

}

