//Comandos
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un To-do nuevo.', { descripcion })
    .command('listar', 'Lista de las tareas por hacer y su estado', { completado })
    .command('actualizar', 'Actualiza el estado de un To-do.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra tarea ingresada por parametro', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}