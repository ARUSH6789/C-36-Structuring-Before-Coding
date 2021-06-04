class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){   //inline or anonymous function
            playerCount = data.val();
        }) 
    }

    updateCount(count){
        database.ref("/").update({
            "playerCount" : count
        })
    }

    update(name){
        var playerIndex = "player" + playerCount; ///string concatenation player + 1 = player1
        database.ref(playerIndex).set({
            "name": name
        })
    }


}