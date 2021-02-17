const { response } = require('express');


const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre, edad
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