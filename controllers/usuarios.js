const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');



const usuariosGet = (req= request , res = response) => {
  const { q,nombre,apikey,page=1,limit=10 } = req.query;
  res.json({
      ok:true,
      msg: 'get API - controlador',
      q,
      nombre,
      apikey,
      page,
      limit
  });
}  

const usuariosPost = async (req, res = response) => {
    

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar la BD
    await usuario.save();

    res.json({
        usuario
    });
  }


const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        ok:true,
        msg: 'put API - controlador',
        id
    });
  } 



const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'Patch API - controlador'
    });
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'Delete API - controlador'
    });
  }    



module.exports = {
    usuariosPost,
    usuariosPut,
    usuariosGet,
    usuariosDelete,
    usuariosPatch
}  