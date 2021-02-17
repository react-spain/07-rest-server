const { response } = require('express');





const usuariosPost = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'post API - controlador'
    });
  }


const usuariosPut = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'put API - controlador'
    });
  } 

const usuariosGet = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'get API - controlador'
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