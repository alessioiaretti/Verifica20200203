var express = require('express');
var router = express.Router();
var file_utenti = require('../utenti.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/people/:email', function (req, res, next) {
    let utente_trovato = file_utenti.utenti.find(utente => utente.email == req.params.email);
    res.render('people', { title: 'Utente', utente: utente_trovato});
});

module.exports = router;
