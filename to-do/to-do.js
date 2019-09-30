const fs = require('fs');


let listadoPorHacer = [];

//Funciones
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: "false"
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = (completado) => {
        //cargarDB();
        return filtrar(completado);
        //  listadoPorHacer;
    }
    //Funcion que filtra por parametro
const filtrar = (completado) => {
    cargarDB();
    let listadoFiltrado = listadoPorHacer.filter(tarea => {
        return tarea.completado === completado;
    });

    if (listadoFiltrado) {
        return listadoFiltrado;
    } else {
        return false;
    }

}


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrarTarea = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return 'Tarea ha sido borrada';
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea,


}