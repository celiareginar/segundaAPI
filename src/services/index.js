const Agendamento = require('./Agendamento');

module.exports = {

    carregarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.buscar();
            resp.status(201).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.send(400).send(JSON.stringify(error))
        }
    },

    criarAgendamento: async(req, resp) => {
        try {
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            resp.atatus(2001).send(JSON.stringify(agendamento))
        } catch (error) {
            resp.send(400).send(JSON.stringify(error))
        }
    }
}