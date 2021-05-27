const Agendamento = require('./Agendamento');
const SequelizeAgendamento = require('../models/SequelizeAgendamentos')

module.exports = {

    carregarTodosAgendamentos: async(req, resp) => {
        try {
            const results = await SequelizeAgendamento.listar();
            resp.status(201).send(JSON.stringify(results));
        } catch (error) {
            resp.send(401).send(JSON.stringify({error: error.message}))
        }
    },

    carregarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.buscar();
            resp.status(201).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.send(401).send(JSON.stringify({error: error.message}))
        }
    },

    criarAgendamento: async(req, resp) => {
        try {
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            resp.atatus(201).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.send(401).send(JSON.stringify({error: error.message}))
        }
    },
    // deletarAgendamento: async(req, resp => {
    //     try{
    //         const id = req.parms
    //     }
    // })
};