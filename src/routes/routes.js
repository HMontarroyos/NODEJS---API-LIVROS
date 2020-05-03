//Encapsulando Rotas 
//const db = require('../config/database');
//const LivroDao = require('../app/infra/livro-dao');
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

    const livroDao = new LivroDao(db);
    livroDao.lista()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }

            ))
            .catch(erro => console.log(erro));

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

