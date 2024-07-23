
//Global Phaser
const config = {
    type: Phaser.AUTO, // webgl, canvas
    width: 270,//Tamaño del juego
    height:255,
    backgroundColor: '#049cd8',
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
//Cargamos los recursos
    this.load.image(//Cargamos una nueve
        'cloud1',
        'assets/scenery/overworld/cloud1.png'
    )
    this.load.image(//Cargamos una nueve
        'floorbrick',
        'assets/scenery/overworld/floorbricks.png'
    )
    //Imagen con más de una posición
    this.load.spritesheet(
        'mario', //<---- id
        'assets/entities/mario.png',
        { frameWidth: 18, frameHeight: 16}//Se pasa el espació que ocupa cada  
    )                                     //uno de los Marios
}

function create () {
    //Mostramos la imagen
    // image (x, y, id-del-assets)
    //Styles cloud
    this.add.image(0, 0, 'cloud1')
        .setOrigin(0, 0)
        .setScale(0.15)//Reduce la imagen

    //Ponemos una imagen y una textura
    this.add.tileSprite(0, config.height -32, config.width, 32,
        'floorbrick')
        .setOrigin(0, 0)//Empieza la imagen desde el punto 0,0
        
    this.mario=this.add.sprite(50, 222, 'mario')
        .setOrigin(0, 1);//Styles  Mario
    
    this.keys = this.input.keyboard.createCursorKeys()
    // Añadir manejo de errores para la carga de assets
    this.load.on('loaderror', (file) => {
        console.error('Error loading asset:', file.src);
    });
}
//Todos los juegos del mundo funcionan con 
// un bucle infinito que se ejecuta en cada frame

function update () {
    if(this.keys.left.isDown){//Movimiento de Mario
        this.mario.x -=2
    } else if (this.keys.right.isDown) {
        this.mario.x +=2
    }

}