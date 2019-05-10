global.fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    return fetch('https://rickandmortyapi.com/api/character')
        .then(respo => respo.json())
        .then((resposta) =>{
            context.res = { body: resposta };
        }).catch((error) => {
            context.log(error);
            context.res = {
                status: 500,
                body: `An error has ocurred`
            };
        });
};