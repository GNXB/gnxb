var app = require('../index');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/portfolio', function(req, res) {
    res.render('portfolio');
});