//const http = require('http');
//Utilizando arquitetura MVC cada modulo tem sua propria resposanbilidade 
//Devido a isso importa do custom-express.js a dependencia express contida nele pelo modulo.export
const app = require('./src/config/custom-express');
app.listen(3000, function() {
    console.log("Servidor utilizando a porta 3000");

})





/*const servidor  = http.createServer(function (req, resp) {

let html = '';
if (req.url == '/') {
    html = `
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Casa do Código </h1>
        </body> 
    </html>
`;
}else if(req.url == '/livros'){
    html = `
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Livros</h1>
        </body> 
    </html>
`;

}
    resp.end(html);
});

servidor.listen(3000);

*/
