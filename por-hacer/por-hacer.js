const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer, null, 3);
    fs.writeFile('./db/data.json', data, err => {
        if (err)
            throw new Error('Error al actualizar la base de datos.', err);
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

};

const getListado = (completado) => {

    cargarDB();

    if (completado === undefined) {
        return listadoPorHacer;
    } else {
        let estado = (completado == "true") ? true : false;
        let listadoFilter = listadoPorHacer.filter(tarea => tarea.completado === estado);
        return listadoFilter;
    }

};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}