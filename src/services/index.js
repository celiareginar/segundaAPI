const Agendamento = require('./Agendamento');
const SequelizeAgendamentos = require('../models/SequelizeAgendamentos');
const SerializarAgendamento = require('../shared/Serializar').SerializarAgendamento;

module.exports = {
    carregarTodosAgendamentos: async(req, resp, next) => {
        try {
            const results = await SequelizeAgendamentos.listar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type')
            );
            resp.status(201).send(serializador.transformar(agendamento));
        } catch (error) {
            next(error)
    },

    carregarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.buscar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type')
            )
            resp.status(201).send(serializador.transformar(agendamento))
        } catch (error) {
            next(error)
        }
    },

    criarAgendamento: async(req, resp) => {
        try {
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type')
            )
            resp.status(201).send(serializador.transformar(agendamento))
        } catch (error) {
            next(error)
        }
    },

    deletarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.remover()
            const serializador = new SerializadorAgendamento(
            resp.getHeader('Content-Type')(
                {message:`Agendamento: ${id} removido com sucesso`}));
        } catch (error) {
            resp.status(404).send(JSON.stringify({error: error.message}))
        }
    },

    alterarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id:id})
            const agendamento = new Agendamento(dados);
            await agendamento.atualizar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type')
            )
            resp.status(201).send(serializador.transformar(agendamento))
        } catch (error) {
            next(error)
        }
    }
}