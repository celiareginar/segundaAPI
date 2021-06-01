const FormatoInvalido = require('../errors/FormatoInvalido');
const jsontoxml = require('jsontoxml');

class Serializar {
    json(dados) {
        return JSON.stringify(dados);
    }

    transformar(dados) {
        dados = this.filtrar
        if (this.contentType === 'application/json') {
            return this.json(dados);
        }
        if(this.contentType === 'application/xml'){
            return this.xml(dados);
        }
        throw new FormatoInvalido(this.contentType);
    }
}
xml(dados) {

    if(Array.isArray(dados)) {
        dados = dados.map((item) =>{
            return {
                [this.tag]: item
            }
        });
        this.tag = this.tagList;
    }
    return jsontoxml({
        [this.tag]: dados
    });
}
filtrarCampos(dados) {
    const camposFiltrados = {};
    this.camposPermitidos..forEach(campo => {
        camposFiltrados[campo] = dados[campo]
        
    });
}

class SerializarAgendamento extends Serializar {
    constructor(contentType) {
        super();
        this.contentType = contentType;
    };
};

class SerializarErro extends Serializar {
    constructor(contentType) {
        super()
        this.contentType = contentType;
        this.camposPermitidos = [
            'id', 'mensagem'
        ]
    }
}

module.exports = {
    Serializar: Serializar,
    SerializarAgendamento: SerializarAgendamento,
    SerializarErro: SerializarErro,
    FormatosValidos: ['application/json']
}
