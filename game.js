
//Global Phaser
const config = {
    type: Phaser.AUTO, // webgl, canvas
    width: 256,//Tamaño del juego
    height:244,
    backgrounColor: '#fff',
    parent:'game', 
    scene:{
        preload, //Funcion que se ejecuta para precargar recursos
        create, //Función que se ejecuta cuando comienza el juego 
        update // Función que se ejecuta en cada frame
    }
}
//Inicializar el juego
new Phaser.Game(config)


function preload () {
    console.log('preload')
}

function create () {
    console.log('create')
}

function update () {}