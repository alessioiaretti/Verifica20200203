var express = require('express');
var router = express.Router();
var createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Utenti' });
});

router.get('/people', function(req, res, next) {
  res.send(TuttiUtenti());
});

router.get('/people/:email', function(req, res, next) {
  let utente = SoloUtente(req.params.email)
  if (typeof utente === "undefined") {
        return next(createError(422, 'OOPS! User not found'));
    }
    else
    {
        res.send(utente);
    }
  
});

function TuttiUtenti()
{
    const lista = require('../utenti.json'); 
    return lista.utenti;
}

function SoloUtente(email)
{
    const lista = require('../utenti.json'); 
    let utente_trovato = lista.utenti.find(utente => utente.email == email);
    return utente_trovato;
}

module.exports = router;
