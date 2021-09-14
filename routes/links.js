const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/add',async(req,res)=>{
    //res.send('form');
    const usuari =await pool.query('select * from usuarios');
    //console.log(usuari);
    //res.send('aquí');
    res.render('links/add',{usuari});
    //res.render('links/add');
});
router.post('/add',async(req,res)=>{
    //console.log(req.body);
    //res.render('links/list');
    const { usuario,contrasena} = req.body;
    const newUser = {
        usuario,
        contrasena
    }; 
    // esto es una función asincrona
    await pool.query('insert into usuarios set ?', [newUser]);
    //console.log(newUser);
    //res.send('ajaaa aquí estoy');
    
    res.redirect('/links/add');
    //const usuari =await pool.query('select usuario,contrasena from usuarios');
    //res.render('links/add',{usuari});
});

router.get('/delete/:id', async(req,res)=>{
    const {id} = req.params;
    const usuari =await pool.query('delete from usuarios where id=?',[id]);
    //console.log(usuari);
    //res.send('aquí');
    res.redirect('/links/add');
});

router.post('/agregar',(req,res)=>{
    const {nombre,ape}= req.body;
    const prueba =  {
        nombre,ape
    };

    console.log(req.body);
 
});

router.get('/eliminar',(req,res)=>{
    const primer= 'holaaa';
    res.send('soy eliminar');
    console.log('yo soy consol');
    console.log(primer);
});

router.get('/consultar',(req,res)=>{
    const primer= 'holaaa';
    res.send('soy consultar');
    console.log('yo soy consol');
    console.log(primer);
});

module.exports = router;