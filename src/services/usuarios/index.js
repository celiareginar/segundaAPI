const SequelizeUsuario = require('../../models/usuarios/SequelizeUsuario');
const Usuario = require('./Usuario');

module.exports = {
    
    delete: async (req, resp, next) => {
        try {
            const id = req.params.id;
            const usuarios = new Usuario({id:id});
            await usuario.remover();
        }catch (error) {
            next(error)
        }
    },

    carregarUsuario: async (req, resp, next) => {
        try {
            const id = req.params.id;
            const usuario = new Usuario({id:id});
            await usuario.buscarPorId();
            resp.send(usuario)
        }catch (error) {
            next(error)
        }
    },

    carregarTodosUsuarios: async (req, resp, next) => {
        try {
            const results = await SequelizeUsuario.listar();
            resp.send(results);
        }catch (error ) {
            next(error)
        }
    },

    alterarUsuario: async (req, resp, next) => {
        try {
            const id = req.params.id;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id:id});
            const usuario = new Usuario(dados);
            await usuario.atualizar();
            resp.status(204).send();
        }catch (error) {
            next(error);
        }
    },

     criarUsuario: async (req, resp, next) => {
         try {
             const dados = req.body;
             const usuario = new Usuario(dados);
             await usuario.criar();
             resp.send(usuario);
         }catch (error) {
             next(error);
         }
     }
}