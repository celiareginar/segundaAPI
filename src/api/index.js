const router = require('express').Router();
const servicoAgendamento = require('../services')

router.get('/agendamentos', (req, resp) => {
    resp.send('OK');
});

router.get('/agendamento/:id',
    servicoAgendamento.carregarAgendamento
);

router.post('/agendamentos',
    servicoAgendamento.criarAgendamento
);

module.exports = router
