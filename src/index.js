const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
// inicio
const app =express();

//configuracion
app.set('port',process.env.PORT || 4000);

app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');


app.set('json spaces',2);


//MIDDELWARE - peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//variables globales
app.use((req,res,next) =>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/notas',require('./routes/notas'));
app.use('/profes',require('./routes/docentes'));
app.use('/estu',require('./routes/estudiantes'));
app.use('/administra',require('./routes/administrativos'));
app.use('/usuarios',require('./routes/usuarios'));
app.use('/api/productos',require('./routes/productos'));
//app.use('/api/pedidos',require('./routes/pedidos'));
//app.use('/api/usuarios',require('./routes/usuarios'));

// public - navegador puede acceder
app.use(express.static(path.join(__dirname,'public')));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});