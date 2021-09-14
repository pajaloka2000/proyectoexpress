const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/usuario',async (req,res)=>{
    
    const usuario = await pool.query('SELECT id_sevicio, id_user, fecha, id_vehiculo FROM servicios');
    res.render('usuarios/mostrar',{usuario});
});




module.exports = router;