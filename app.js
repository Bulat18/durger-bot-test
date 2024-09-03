let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color =  '#2cab37';

let item = "";
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

btn1.addEventListener("click",function(){
    if (MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You've selected product 1");
        item = 1;
        tg.MainButton.show();
    }
});

btn2.addEventListener("click",function(){
    if (MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You've selected product 2");
        item = 2;
        tg.MainButton.show();
    }
});

btn3.addEventListener("click",function(){
    if (MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You've selected product 3");
        item = 3;
        tg.MainButton.show();
    }
});


btn4.addEventListener("click",function(){
    if (MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You've selected product 4");
        item = 4;
        tg.MainButton.show();
    }
});

btn5.addEventListener("click",function(){
    if (MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You've selected product 5");
        item = 5;
        tg.MainButton.show();
    }
});

btn6.addEventListener("click",function(){
    if (MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You've selected product 6");
        item = 6;
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonBlicked", ()=>{
     tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText=`${tg.initDataUnsafe.user.username}`

usercard.appendChild(p);