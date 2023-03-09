
var Content= document.querySelector(".content");
var question=  document.querySelector(".qText");
var questionall=  document.querySelector(".question");
var startBtn=  document.querySelector(".startBtn");
var startdiv=  document.querySelector(".startButton");
var resetBtn=  document.querySelector(".resetBtn");
var retryBtn=  document.querySelector(".retryBtn");
var answerBox= document.getElementById("answerBox");
var ordList= document.querySelector(".ord-list");
var scorewin= document.querySelector(".scorewin");
var scoreloss= document.querySelector(".scoreloss");
var timersize= document.querySelector(".timer");
var timerDiv= document.querySelector(".timer-div");
var inputRes= document.querySelector(".inputRes");
var head1= document.querySelector(".head1");
var guess=  document.querySelector(".guess");
var listA= document.querySelector("#A");
var listB= document.querySelector("#B");
var listC= document.querySelector("#C");
var listD= document.querySelector("#D");
var winCounter= 0;
var lossCounter= 0;

Content.style= "margin-left: 40%";
scorewin.style= "background-color: #e1f993; padding: 5px ";
scoreloss.style= "background-color: #e1f993; padding: 5px ";
timerDiv.style= "margin: 10px";
questionall.style= "margin-left: -4%";
timersize.style= "font-size: 30px";
ordList.style= "display: none";
answerBox.style.display= "none";
retryBtn.style.display="none";
startdiv.style.margin= "10px";
answerBox.style.width= "30%";
guess.style= "margin-left: -6%";
head1.style= "margin-left: -3%";
var timer = 60;

function countDown(){
    
    var count= setInterval(function(){
        getScore();
    var timerSpan=  document.querySelector(".timer");
    timerSpan.textContent= timer;
    timer--;
        if(timer < -1){
        clearInterval(count);
        timerDiv.style.display="none";
        question.style.display="none";
        ordList.style.display="none";
        startBtn.style.display="none";
        retryBtn.style.display="inline";
        inputRes.innerHTML= "<h1>!! Game Over.....Try again !!</h1>";
        answerBox.value= "you have not answered all the questions correctly in time";
        answerBox.style.width= "50%";
        answerBox.readOnly= "true";
        return countDown;
        }
    },1000);
    
}

function getScore(){
    var getLocScore= localStorage.getItem("winScore");
    var getLocScoreL= localStorage.getItem("lossScore");
    if(getLocScore === null){
        scorewin.textContent= "Correct Guesses: 0";
    }else{
        scorewin.textContent= "Correct Guesses: "+ getLocScore;
    }
    if(getLocScoreL === null){
        scoreloss.textContent= "Incorrect Guesses: 0";
    }else{
        scoreloss.textContent= "Incorrect Guesses: "+ getLocScoreL;
    }
}
function getLocalWin(){
    var localScore1 = localStorage.getItem("winScore");
    if(localScore1 === null){
        winCounter= 0;
    }else{
        winCounter = localScore1;
    }
    winCounter++;
    localStorage.setItem("winScore", winCounter);
}

function getLocalLoss(){

    var localScore2 = localStorage.getItem("lossScore");
    if(localScore2 === null){
        lossCounter= 0;
    }else{
        lossCounter = localScore2;
    }
    lossCounter++;
    localStorage.setItem("lossScore", lossCounter);
}

var qArray= 0;
answerBox.addEventListener("keydown",function(event){
    var kPres= event.key;
    if(qArray == 0){
        if( kPres === "1"){
            inputRes.textContent= "Winner..Good work!!";
            answerBox.value= " ";
            getLocalWin();
            qArray = 1;
            return Quests();
        }else{
            timer = timer - 10;
            inputRes.textContent= "Wrong, Try again!!";
            answerBox.value= " ";
            getLocalLoss();
        }
    }
    if(qArray == 1){
        if( kPres === "2"){
            
            inputRes.textContent= "Winner..Good work!!";
            answerBox.value= " ";
            getLocalWin();
            qArray = 2;
            return Quests();
        }else{
            timer = timer - 10;
            inputRes.textContent= "Wrong, Try again!!";
            answerBox.value= " ";
            getLocalLoss();
        }
    }
    if(qArray == 2){
        if( kPres === "4"){
            inputRes.textContent= "Winner..Good work!!";
            answerBox.value= " ";
            getLocalWin();
            qArray = 3;
            return Quests();
        }else{
            timer = timer - 10;
            inputRes.textContent= "Wrong, Try again!!";
            answerBox.value= " ";
            getLocalLoss();
        }
    }
    if(qArray == 3){
        if( kPres === "1"){
            inputRes.textContent= "Winner..Good work!!";
            answerBox.value= " ";
            getLocalWin();
            qArray = 4;
            return Quests();
        }else{
            timer = timer - 10;
            inputRes.textContent= "Wrong, Try again!!";
            answerBox.value= " ";
            getLocalLoss();
        }
    }
});

function Quests(){
    var qArr= ["What is the biggest star in the universe ?", "What is the deepest part of the ocen called ?", "How many Ants are there in the world ?", "which species of turtle is the fastest ?"];
    var listAanswer_1= ["UY Scuti ","VY Canis Majoris","Mu Cephei","Betelgeuse"];
    var listAanswer_2= ["Mariana Trench","Challenger Deep","Diamantina Trench","South Sandwich Trench"];
    var listAanswer_3= ["5 quadrillion","10 quadrillion","15 quadrillion","20 quadrillion"];
    var listAanswer_4= ["leatherback","Loggerhead","Painted","Common snapping"];
    ordList.style= "display: block";
    
    // console.log(qNum);
    if(qArray == 0){
        question.textContent= qArr[0];
        answerBox.style.display= "block";
        answerBox.setAttribute("maxLength",1);
        listA.textContent= listAanswer_1[0];
        listB.textContent= listAanswer_1[1];
        listC.textContent= listAanswer_1[2];
        listD.textContent= listAanswer_1[3];
    }

    if(qArray == 1){
        question.textContent= qArr[1];
        answerBox.style.display= "block";
        listA.textContent= listAanswer_2[0];
        listB.textContent= listAanswer_2[1];
        listC.textContent= listAanswer_2[2];
        listD.textContent= listAanswer_2[3];
    }

    if(qArray == 2){
        question.textContent= qArr[2];
        answerBox.style.display= "block";
        listA.textContent= listAanswer_3[0];
        listB.textContent= listAanswer_3[1];
        listC.textContent= listAanswer_3[2];
        listD.textContent= listAanswer_3[3];
    }
    if(qArray == 3){
        question.textContent= qArr[3];
        answerBox.style.display= "block";
        listA.textContent= listAanswer_4[0];
        listB.textContent= listAanswer_4[1];
        listC.textContent= listAanswer_4[2];
        listD.textContent= listAanswer_4[3];
    }

    if(qArray == 4){
        timerDiv.style.display="none";
        question.style.display="none";
        ordList.style.display="none";
        startBtn.style.display="none";
        retryBtn.style.display="inline";
        inputRes.innerHTML= "<h1>!! CHAMPION OF THE WORLD !!</h1>";
        answerBox.value= "you have answered all the questions correctly in time";
        answerBox.style.width= "50%";
        answerBox.readOnly= "true";
    }
}

resetBtn.addEventListener("click",function(){
    localStorage.removeItem("winScore");
    localStorage.removeItem("lossScore");
    getScore()
})
retryBtn.addEventListener("click",function(){
    location.reload();
})

startBtn.addEventListener("click",function(){
    Quests();
    countDown();
});
getScore();


