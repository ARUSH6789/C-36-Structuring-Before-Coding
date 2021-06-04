//step1
var database;
var gameState = 0;
var playerCount;
var form,game,player;

var ball;

function setup(){
    createCanvas(500,500);

    //step2 - namespacing/nickname
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    
}

