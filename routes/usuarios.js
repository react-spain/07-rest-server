const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const { esRolValido, emailExiste, emailExisteUsuarioPorID } = require('../helpers/db-validators');
const route = Router();


route.post('/',[
        check('nombre', 'El nombre es necesario').not().isEmpty(),
        check('password','El password tiene que ser mas de 6 letras').isLength({ min:6 }),
        check('correo','El correo no es valido').isEmail(),
        check('correo').custom( emailExiste ),
        // check('rol', 'No es un roll').isIn(['ADMIN_ROLE','USER_ERROR']),
        check('rol').custom( esRolValido ),
        validarCampos
],usuariosPost);

route.put('/:id', [
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom( emailExisteUsuarioPorID ),
        check('rol').custom( esRolValido ),
        validarCampos
],usuariosPut);

route.get('/', usuariosGet);

route.patch('/', usuariosPatch); 
route.delete('/:id',[
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom( emailExisteUsuarioPorID ),
        validarCampos

] ,usuariosDelete);

module.exports = route;