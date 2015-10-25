var express = require('express');
var app = express();
app.engine('.html', require('jade').renderFile);
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

// views is directory for all template files

app.set('views', __dirname + '/master/jade');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('index')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});