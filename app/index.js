var sub = require('./sub');
require('./main.css');
require('./layout.styl');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>(CSS 計画通り)<br>(Node Server 計画通り)<br>(热更新 計画通り)<br>（ES6 計画通り）';
app.appendChild(sub());
document.body.appendChild(app);
