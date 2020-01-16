
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const start = document.querySelector('#start');
const body = document.body;
const pcTyping = document.querySelector('.pc-typing');
const playerTyping = document.querySelector('.player-typing');
const screen = document.querySelector('.screen');
let pcArr = [];
let playerArr = [];
let count = 0;
let strict  = document.querySelector('#strict');
let power = document.querySelector('#power');

power.addEventListener('click',main);

function main(){
   if(powerCheked()){
    start.addEventListener('click',startGameAgain);
    green.addEventListener('click',playerGreen);
    red.addEventListener('click',playerRed);
    yellow.addEventListener('click',playerYellow);
    blue.addEventListener('click',playerBlue);
    screen.innerHTML = '-'
   }else screen.innerHTML = '';
};

function powerCheked(){
    if(power.checked){
        return true;
    }else{
        return false;
    }
};
function callGreen(){
    setTimeout(()=>{
        return green.style.backgroundColor = "rgb(121, 158, 121)"
    },1);
    setTimeout(()=>{
        return green.style.backgroundColor = "green"
    },700);
    pcArr.push(1);
    return console.log(pcArr)
    

};
function callRed(){
    setTimeout(()=>{
        return red.style.backgroundColor = "rgba(255, 0, 0, 0.39)"
    },1);
    setTimeout(()=>{
        return red.style.backgroundColor = "red"
    },700);
    pcArr.push(2);
    return console.log(pcArr)

};
function callYellow(){
    setTimeout(()=>{
        return yellow.style.backgroundColor = "rgb(255, 255, 175)"
    },1);
    setTimeout(()=>{
        return yellow.style.backgroundColor = "yellow"
    },700);
    pcArr.push(3);
    return console.log(pcArr)

};
function callblue(){
    setTimeout(()=>{
        return blue.style.backgroundColor = "rgb(163, 163, 255)"
    },1);
    setTimeout(()=>{
        return blue.style.backgroundColor = "blue"
    },700);
    pcArr.push(4);
    return console.log(pcArr)
};


function startGame(){   
        reset();
        screen.innerHTML = count;
        random(callGreen,callRed,callYellow,callblue);
        random2(callGreen,callRed,callYellow,callblue);
        random3(callGreen,callRed,callYellow,callblue);
        random4(callGreen,callRed,callYellow,callblue);  
        console.log(strictChecked());   
}
function startGameAgain(){
    if(powerCheked()){
    reset();
    count = 0;
        screen.innerHTML = count;
        random(callGreen,callRed,callYellow,callblue);
        random2(callGreen,callRed,callYellow,callblue);
        random3(callGreen,callRed,callYellow,callblue);
        random4(callGreen,callRed,callYellow,callblue);  
        console.log(strictChecked());}
}


function random(grr,re,yell,bl){
    let ran = [grr,re,yell,bl];
    let randomNumber = Math.floor(Math.random() * ran.length);
     setTimeout(()=>{
         return ran[randomNumber]();
     },1000);    
}
function random2(grr,re,yell,bl){
    let ran = [grr,re,yell,bl];
    let randomNumber = Math.floor(Math.random() * ran.length);
    setTimeout(()=>{
        return ran[randomNumber]();       
    },2000);
}
function random3(grr,re,yell,bl){
    let ran = [grr,re,yell,bl];
    let randomNumber = Math.floor(Math.random() * ran.length);
    setTimeout(()=>{
        return ran[randomNumber]();       
    },3000);
}
function random4(grr,re,yell,bl){
    let ran = [grr,re,yell,bl];
    let randomNumber = Math.floor(Math.random() * ran.length);
    setTimeout(()=>{
        return ran[randomNumber]();       
    },4000);
}


function playerGreen(){
    if(powerCheked()){
    setTimeout(()=>{
        return green.style.backgroundColor = "rgb(121, 158, 121)"
    },1);
    setTimeout(()=>{
        return green.style.backgroundColor = "green"
    },700);
    playerArr.push(1);
    console.log(playerArr);
    check();
    console.log(pcArr == playerArr)
}
};
function playerRed(){
    if(powerCheked()){
    setTimeout(()=>{
        return red.style.backgroundColor = "rgba(255, 0, 0, 0.39)"
    },1);
    setTimeout(()=>{
        return red.style.backgroundColor = "red"
    },700);
    playerArr.push(2);
    console.log(playerArr);
    check();
    console.log(pcArr == playerArr)
}
}
function playerYellow(){
    if(powerCheked()){
    setTimeout(()=>{
        return yellow.style.backgroundColor = "rgb(255, 255, 175)"
    },1);
    setTimeout(()=>{
        return yellow.style.backgroundColor = "yellow"
    },700);
    playerArr.push(3);
    console.log(playerArr);
    check();
    console.log(pcArr == playerArr)
}
}
function playerBlue(){
    if(powerCheked()){
    setTimeout(()=>{
        return blue.style.backgroundColor = "rgb(163, 163, 255)"
    },1);
    setTimeout(()=>{
        return blue.style.backgroundColor = "blue"
    },700);
    playerArr.push(4);
    console.log(playerArr);
    check();
}
}
function reset(){
    pcArr = [];
    playerArr = [];
}

function strictChecked(){
 if(strict.checked){
     return true
 }else{
     return false
 }
}

function check(){
    screen.innerHTML = count;
    if(playerArr[3] !=undefined ){
         if(checkArr(pcArr,playerArr)){
             count ++;
             screen.innerHTML = count;            
             reset();
             startGame();
         }else{ 
             if(strictChecked()){
               reset(); 
               count = 0;
               screen.innerHTML = 'NO!' 
               console.log(strictChecked())
             }
             else{
                 reset();
                 screen.innerHTML = 'NO!'         
                 setTimeout(()=>{
                     return startGame();
                 },3000);
             }
             
         }
         console.log(count)
         console.log(playerArr[3] !=undefined)
         console.log(checkArr(pcArr,playerArr))
    }
}

function checkArr(arr1,arr2){
  if(arr1[0]==arr2[0] &&
     arr1[1]==arr2[1] &&
     arr1[2]==arr2[2] && 
     arr1[3]==arr2[3]){
         return true;
      }else{
          return false
      }
}
console.log(count)

console.log(strictChecked());