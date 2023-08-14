let homeScoreCard=document.querySelector(".homeScore");
let guestScoreCard=document.querySelector(".guestScore");
 let homeCount=0;
 let guestCount=0;
function one(str){
    if(str=="home"){
        homeCount=homeCount+1;
        homeScoreCard.innerText=homeCount;
    }else{
        guestCount=guestCount+1;
        guestScoreCard.innerText=guestCount;
    }      
}
function two(str){
    if(str=="home"){
        homeCount=homeCount+2;
        homeScoreCard.innerText=homeCount;
    }else{
        guestCount=guestCount+2;
        guestScoreCard.innerText=guestCount;
    }   
}
function three(str){
    if(str=="home"){
        homeCount=homeCount+3;
        homeScoreCard.innerText=homeCount;
    }else{
        guestCount=guestCount+3;
        guestScoreCard.innerText=guestCount;
    }   
}