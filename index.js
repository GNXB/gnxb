var express = require('express'),
    app = module.exports = express(),
    port = 8080;

app.set('views', __dirname + '/view');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

require(__dirname + '/route/main');

app.listen(port, function() {
    console.log('Start server at port ' + port);
});