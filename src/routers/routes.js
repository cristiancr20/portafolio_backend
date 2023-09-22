const express = require('express');
const router = express.Router();

const { createUser, getUsers, loginUser } = require('../controllers/controllers.user');
const { createPagina,getPaginaById, getPaginas} = require('../controllers/controllers.pagina');

//rutas admin
router.post('/create/user', createUser);
router.get('/get/user', getUsers); 
router.post('/login', loginUser);

//rutas categoria
router.post('/crear/pagina',createPagina);
router.get('/get/paginas', getPaginas);
router.get('/get/pagina/:id', getPaginaById);

module.exports = router;