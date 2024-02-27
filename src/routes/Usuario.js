const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = express.Router();
const usuarioController = new UsuarioController();

router.get('/listar', usuarioController.index);
router.post('/cadastrar', usuarioController.create)
router.put('/update/:id', usuarioController.update)
router.get('/:id', usuarioController.show)
router.delete('/delete/:id', usuarioController.delete)

module.exports = router;
