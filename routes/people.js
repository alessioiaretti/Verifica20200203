var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Utenti' });
});

router.get('/people', function(req, res, next) {
  res.send(TuttiUtenti());
});

function TuttiUtenti()
{
    const lista = require('../utenti.json'); 
    return lista.utenti;
}

module.exports = router;
