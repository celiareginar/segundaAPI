const configExpress = require('./config/configExpress');
const config = require('config');
const instanciadb = require('./db');

(async () => {
    try {
        await instanciadb.sync()

        app = configExpress()
        // app.listen(config.get('api.port'), () => {
            console.log('Servidor  Rodando')
        // })
    } catch (error) {
        throw error;
    };
})();
