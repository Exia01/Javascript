var quarters = 100;
var randomwin = Math.floor(Math.random() * (100 - 50 + 1) + 50);
function slotMachine(){
    for(quarters>0; quarters--;){
        if (Math.floor(Math.random() * (100 - 1 + 1))  === Math.floor(Math.random() * (100 - 1 + 1)) + 1){
                console.log("Balance = " + quarters);
                console.log("You Won " + randomwin);
                quarters += randomwin;
                console.log("You won!!!!" + quarters);
                break;
            }
        else if(quarters==0){
            console.log("Sorry!!! :[ Better luck next time!")
            console.log("Balance = " + quarters);
            break;
        }
        }
    }
slotMachine();


// function slots(coins){
// 	coins--;
// 	if (coins == -1){
// 		console.log("You lost all your money!")
// 		return coins;
// 	}
// 	if (coins > 600){
// 		console.log("You win enough, you should stop...")
// 		return coins;
// 	}
// 	var win = Math.random() * 100;
// 	var reward = Math.floor((Math.random() * 50) + 50);
// 	if (Math.floor(win) == 50){
// 		coins += reward;
// 		console.log("YOU WIN!!!")
// 	}
// 	console.log(coins, win, reward);
// 	slots(coins);
// }

// slots(500);

// function letsPlay(){
//     for( var a = 0; a<games; a++){        
//     if( Math.floor(mathRandom) === a)
//     console.log("this many games" + a);
//     }
// console.log(a);
// }


// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
// function randomWholeNum() {
//   return Math.floor(Math.random() * 10);
// }

// function randomRange(myMin, myMax) {

//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
//   }
  
//   // Change these values to test your function
//   var myRandom = randomRange(5, 10);
  
