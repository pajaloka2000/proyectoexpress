const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
 //res.send('Hello World');
 const data = {
    "nombre":"andres",
    "apellido":"calamaro",
 };
res.json(data);
});
module.exports = router;
