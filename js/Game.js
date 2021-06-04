class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){   //inline or anonymous function
            gameState = data.val();
        }) 
    }

    update(state){
        database.ref("/").update({
            "gameState" : state
        })
    }

    //start() will be called when gameState is 0
    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }


}