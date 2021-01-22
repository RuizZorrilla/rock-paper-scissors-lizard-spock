const results=[
    ['scissors' ,'cut'          ,'paper'],
    ['paper'    ,'covers'       ,'rock'],
    ['rock'     ,'crushes'      ,'lizard'],
    ['lizard'   ,'poisons'      ,'spock'],
    ['spock'    ,'smashes'      ,'scissors'],
    ['scissors' ,'decapitates'  ,'lizard'],
    ['lizard'   ,'eats'         ,'paper'],
    ['paper'    ,'disproves'    ,'spock'],
    ['spock'    ,'vaporizes'    ,'rock'],
    ['rock'     ,'crushes'      ,'scissors']
];

document.addEventListener("DOMContentLoaded", loaded)

 function loaded(){
    console.log("Welcome! Let's play");
    game()
} 

function game(){
        console.log(round(computerPlays(), playerPlays()));
}

function round(compueterInput,playerInput){
    //FOR LOOP SEARCHES FOR PLAYER INPUT IN THE FIRST ROW
    //----IF INPUT FOUND LOOKS IF COMPUTER PLAYER IS IN THIRD ROW
    //--------IF IT IS FOUND, PLAYER WINS
    //----------RETURN STRING WITH PLAYER WINS
    
    for (let i = 0; i < results.length; i++){
        if(results[i][0]==playerInput){
            if(results[i][2]==compueterInput){
                return "Player wins! " + results[i][0] +" "+results[i][1] +" "+results[i][2];
            }
        }
    }

    //FOR LOOP SEARCHES FOR COMPUTER INPUT IN THE FIRST ROW
    //----IF INPUT FOUND LOOKS IF PLAYER PLAYER IS IN THIRD ROW
    //--------IF IT IS FOUND, COMPUTER WINS
    //----------RETURN STRING WITH COMPUTER WINS

    for (let i = 0; i < results.length; i++){
        if(results[i][0]==compueterInput){
            if(results[i][2]==playerInput){
                return "Computer wins! " + results[i][0] +" "+results[i][1] +" "+results[i][2];
            }
        }
    }

    return "An unexpected mistake has ocurred.. Sorry!";
}

function computerPlays(){
    let computerNumber= Math.floor(Math.random() * 10); 
    return results[computerNumber][0];
}



/* function playerPlays(){
    let playerInput
    let isValid =false;
    while(isValid==false){

        isValid=true;
        playerInput = prompt("Choose between: lizard, spock, rock, paper or scissors").toLowerCase();

        switch (playerInput){
            case "rock":
                break;
            case "paper":
                break;
            case "scissor":
                break;
            case "lizard":
                break;
            case "spock":
                break;
            default:
                isValid=false;
                console.log("Input isn't valid :(");
        }
    }
    return playerInput;

} */

