const NaoEncontrado = require('../../errors/NaoEncontrado');
const { listar, adicionar, buscarPorPK, remover } = require('../agendamentos/SequelizeAgendamentos');
const TabelaUsuario = require('./TabelaUsuario');

module.exports = {
    async listar() {
        try {
            results = await TabelaUsuario.findAll({});
            return results;
        }catch (error) {
            throw error
        }
    },

    asunc adicionar(ususario) {
        try {
            result = await TabelaUsuario.create(usuario);
            return result;
        }catch (error){
            throw error
        }
    },

    async buscarPorPK(id) {
        try {
            usuario = await TabelaUsuario.findByPk(id);
            if(!usuario) {
                throw new NaoEncontrado;
            }
            return usuario;
        }catch (error) {
            throw error
        }
    },

    async buscarPorEmail(email) {
        try {
            usuario = await TabelaUsuario.findOne({
                where: {
                    email: email
                }
            });
            if(!usuario) {
                throw new NaoEncontrado('Usuario')
            }
            return usuario;
        }catch (error){
            throw error
        }
    },

    async remover(id) {
        try {
            result = await TabelaUsuario.remove(
                {
                    where: {
                        id:id
                    }
                }
            );
            return result
        }catch (error){
            throw error
        }
    }
};

