const descripcion = {
    alias: "d",
    demand: true,
    desc: "Descripcion de la tarea por hacer"
};

const completado = {
    alias: "c",
    default: true,
    desc: "Estado de la tarea"
};

const completado2 = {
    alias: "c",
    desc: "Estado de la tarea"
};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea del listado por hacer', { descripcion })
    .command('listar', 'Listar las tareas por hacer', { completado2 })
    .help()
    .argv;

module.exports = {
    argv
};