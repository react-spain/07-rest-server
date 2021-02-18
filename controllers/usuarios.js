const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');



const usuariosGet = async(req= request , res = response) => {
  // const { q,nombre,apikey,page=1,limit=10 } = req.query;
  const { limit=5, desde= 0 } = req.query;
  const query = {estado:true}
  
  /*
  const usuarios = await Usuario.find( query )
        .limit(Number( limit ))
        .skip(Number( desde ));

  const total = await Usuario.countDocuments( query );
  */

  // con await espera que se ejecute las funciones.
  // all manda las dos promesas juntas.
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments( query ),
    Usuario.find( query )
        .skip(Number( desde ))
        .limit(Number( limit ))
        

  ]);
  
  res.json({
    total,
    usuarios
  });
}

const usuariosPost = async(req, res = response) => {
    

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


const usuariosPut = async (req, res = response) => {
    
    // const id  = req.params.id;
    const { id }  = req.params;
    // password,google,correo datos que no permito actualizar
    const { _id,password,google,correo, ...resto  } = req.body

    // Validar contra BD
    if ( password ){
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync( password, salt )
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );
 
    res.json(usuario);
  } 



const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'Patch API - controlador'
    });
  }

const usuariosDelete = async (req, res = response) => {

    const { id } = req.params;

    // Fisicamente Lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );
    const usuario = await Usuario.findByIdAndUpdate( id, {estado:false} );
    res.json({
       usuario
    });
  }    



module.exports = {
    usuariosPost,
    usuariosPut,
    usuariosGet,
    usuariosDelete,
    usuariosPatch
}  