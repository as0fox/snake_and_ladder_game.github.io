var p1=document.getElementById('player1').innerHTML="1";
var p2=document.getElementById('player2').innerHTML="1";
var text=document.getElementById('text');
var click=document.getElementById('btn');

let rand=1;

var num1=1;
var num2=1;

var pl1 = document.querySelector('.item'+num1+ '> .pl > #pl1'); 
var pl2 = document.querySelector('.item'+num2+ '> .pl > #pl2'); 
var img = document.querySelector('.rock > .image'); 

 pl1.style.visibility = "visible";
 pl2.style.visibility = "visible";
 p1=document.getElementById('player1').innerHTML=num1;
 p2=document.getElementById('player2').innerHTML=num2;

var flag=true;


click.addEventListener('click',()=>{
    rand= Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(rand);

    switch(rand){
        case 1:
            img.style.backgroundImage = "url('./image/1.png')"; 
            break;
          case 2:
            img.style.backgroundImage = "url('./image/2.png')"; 
            break;
          case 3:
            img.style.backgroundImage = "url('./image/3.png')";
            break;
          case 4:
            img.style.backgroundImage = "url('./image/4.png')";
            break;
            case 5:
                img.style.backgroundImage = "url('./image/5.png')";
                break;
              case 6:
                img.style.backgroundImage = "url('./image/6.png')";
                break;
    }
    pl1.style.visibility = "hidden";
    pl2.style.visibility = "hidden";
if(flag){
    if(num1+rand>100)
        {
        
        }else{
          num1+=rand;
        }
    flag=false;
    if(num1==100){
        text.innerHTML="<hr>Player1 is Winner<hr>";
    }else{
    text.innerHTML="<hr>Player2 Go<hr>";
}
}else{
    if(num2+rand>100)
        {
        
        }else{
    num2+=rand;
}
flag=true;
if(num2==100){
    text.innerHTML="<hr>Player2 is Winner<hr>";


}else{
text.innerHTML="<hr>Player1 Go<hr>";
}
}
switch(num1){
case 97:num1=60;
break;
case 74:num1=30;
break;
case 57:num1=15;
break;

case 54: num1=10;
break;
case 97:num1=60;
break;
case 9:num1=52;
break;
case 19:num1=62;
break;

case 56: num1=75;
break;



}
switch(num2){
  case 97:num2=60;
  break;
  case 74:num2=30;
  break;
  case 57:num2=15;
  break;
  
  case 54: num2=10;
  break;
  case 97:num2=60;
  break;
  case 9:num2=52;
  break;
  case 19:num2=62;
  break;
  
  case 56: num2=75;
  break;
  
  
  
  }

    pl1 = document.querySelector('.item'+num1+ '> .pl > #pl1'); 
    pl2 = document.querySelector('.item'+num2+ '> .pl > #pl2'); 

 pl1.style.visibility = "visible";
 pl2.style.visibility = "visible";
 p1=document.getElementById('player1').innerHTML=num1;
 p2=document.getElementById('player2').innerHTML=num2;

});