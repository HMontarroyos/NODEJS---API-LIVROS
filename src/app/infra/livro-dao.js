/*

A classe LivroDao será responsável por fazer o acesso ao banco de dados em referência aos livros no sistema. 
Isso é uma implementação de um padrão de projeto muito famoso, chamado DAO - Data Access Object (objeto de acesso aos dados).

*/

class LivroDao {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros!');

                    return resolve(resultados);
                }
            )

        });
    }
}

module.exports = LivroDao;