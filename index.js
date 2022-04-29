const express = require('express')
const app = express()
const exphbs = require("express-handlebars");


app.listen(3000,()=>{
    console.log('Servidor andando en puerto 3000');
})

app.set('view engine', 'handlebars')

// app.engine(
//     'handlebars',
//     exphbs({
//         layoutDir: __dirname + '/views',
//         partialsDir: __dirname + '/views/componentes',
//     })
// )
app.engine(
    "handlebars",
    exphbs.engine({
      layoutsDir: __dirname + "/views",
      partialsDir: __dirname + "/views/componentes/",
    })
  );
  

app.get('/', (req,res)=>{
    res.render('Inicio', {layout: 'Inicio'})
})

app.get('/Contactos', (req,res)=>{
    res.render('Contactos', {layout:'Contactos'})
})

app.get('/Galeria', (req,res)=>{
    res.render('Galeria', {layout:'Galeria'})
})

app.get('/ventas', (req,res)=>{
    res.render('Ventas',{
        layout: 'Ventas',
        usuario: 'Maria José',
        ventas: [1499,42490,22500]
    })
})