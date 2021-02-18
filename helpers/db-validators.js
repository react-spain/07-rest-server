const Role = require('../models/rol');
const Usuario = require('../models/usuario');

const esRolValido = async(rol= '') =>{
    
    const existeRol = await Role.findOne({ rol });
    if (!existeRol){
            throw new Error(`El ${ rol } no esta registrado en la bd`)
    }
 }

 const emailExiste = async( correo = '') => {
    const emailExiste = await Usuario.findOne({ correo });
    if (emailExiste){
            throw new Error(`El correo:${ correo } ya esta registrado en la bd`);
    }
 }


 module.exports = {
     esRolValido, emailExiste
 }