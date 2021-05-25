const sequelizeAgendamento = require('../services')

class Agendamento {
    construtor({id, nome_cliente, nome_servico, status, data_agendamento, data_criacao, data_atualizacao}) {
        this.id = id;
        this.nome_cliente = nome_cliete;
        this.nome_servico = mome_servico;
        this.status = status;
        this.data_agendamento = data_agendamento;
        this.data_criacao = data_criacao;
        this.data_atualizacao = data_atualizacao;
    };
    async criar() {
        const result = await sequelizeAgendamento.adicionar({
            nome_cliente: this.nome_cliente,
            this.nome_servico: this.nome_servico,
            status: this.status,
            data_atualizacao: this.data_atualizacao
        });
        this.id - result.id;
        this.data_criacao = result .data_criacao;
        this.data_atualizacao = result.data_atualizacao;
    };

    async buscar() {
        const result = await sequelizeAgendamento.buscarPorPk(this.id);
        this.id = id;
        this.nome_cliente = result.nome_cliete;
        this.nome_servico = result.mome_servico;
        this.status = result.status;
        this.data_agendamento = result.data_agendamento;
        this.data_criacao = result.data_criacao;
        this.data_atualizacao = result.data_atualizacao;
    };
}
module.exports = Agendamento;