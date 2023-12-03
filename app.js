const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = 3003;

const conn = require('./src/database/conn');

//* Importando tabelas
const User = require('./src/models/User');
const Book = require('./src/models/Books');

//* Importando as rotas
const UserRoutes = require('./src/routes/UsersRoutes');
const BooksRoutes = require('./src/routes/BooksRoutes');

//* Usando as rotas
app.use('/', UserRoutes);
app.use('/', BooksRoutes);

conn.sync().then(() => {
    app.listen(port);
}).catch((err) => {
    console.log(err)
})
