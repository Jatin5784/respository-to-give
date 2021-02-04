var mydatabase;
var mygamestate=0
var myplayercount=0
var mygame,myPlayer,myForm;
var allplayers= [];

function setup(){
    mydatabase = firebase.database();
    createCanvas(400,400);

    mygame= new Game();
    mygame.readstate();
    mygame.start();
    
}

function draw(){
    //background("white");

    if(myplayercount===2){

        mygame.update(1);
    }

    if(mygamestate===1){
        clear();
        mygame.play();
        
    }
}