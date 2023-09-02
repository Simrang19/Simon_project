// alert("Hi");
buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var gamePattern=[];
var flag=true;

document.addEventListener('keydown', (event) => {
    // var name = event.key;
    // var code = event.code;
    var level=0;
    // document.querySelector('h1').innerHTML="Level 0";
    nextSequence(level);
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);

function startOver(){
    level=0;
    gamePattern=[];
    
}

function play(col) {
    var audio = new Audio("sounds/"+col+".mp3");
    audio.play();
  }

function nextSequence(level){
    document.querySelector('h1').innerHTML="Level "+level;
    var randomNumber=Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    userClickedPattern=[];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    var col=buttonColours[randomNumber];
    // console.log(col);
    var item=document.getElementById(col);
    item.classList.add("pressed");
    setTimeout(() => {
        item.classList.remove("pressed");
    }, 200);
    play(col);
    // return randomNumber;
}
function clickHandler(col){
    // document.querySelector('#col').addEventListener("click", function() {
    //     alert("Button Clicked");
    // });
    
    // alert(col);
    var userChosenColour=col;
    var lvl=userClickedPattern.length;
    userClickedPattern.push(col);
    
    
    var url="./sounds/"+col+".mp3";
    playSound(url);
    animatePress(col);
    console.log(userClickedPattern);
    console.log(gamePattern);
    
    console.log(lvl);
    checkAnswer(lvl);
}

function playSound(url){
    new Audio(url).play();
}

function animatePress(currentColour){
    var item=document.getElementById(currentColour);
    item.classList.add("pressed");
    setTimeout(() => {
        item.classList.remove("pressed");
    }, 200);
}



function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            console.log("won");
            console.log("win");
            setTimeout(() => {
                nextSequence(currentLevel+1);
            }, 1000);
        }
        // console.log(userClickedPattern[currentLevel]);
        // for(var i=0;i<currentLevel+1;i++){
        //     if(userClickedPattern[i]==gamePattern[i]){
        //         // console.log(userClickedPattern[currentLevel]);
        //     }
        //     else{
        //         // console.log(userClickedPattern[currentLevel]);
        //         flag=false;
        //         console.log("loss");
        //     }
        // }
    }
    else{
        // console.log(userClickedPattern[currentLevel]);
        var url="./sounds/wrong.mp3";
        playSound(url);
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);
        document.querySelector('h1').innerHTML="Game Over, Press Any Key to Restart";
        startOver();
        console.log("loss");
    }
    
    
    
}

// nextSequence();
// clickHandler();
// $(document).keypress(function() {

//     nextSequence();

// });




