<!DOCTYPE html>
<html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Taschenechner</title>
   </head>
   <style>
       *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
}
body{
    position:absolute;
    background: #091921;
}
form{
  position:absolute;
    top:300px;
    left:180%;
}
.calculater{
    position: relative;
    display: grid;
}
.calculater .value{
    grid-column: span 4;
    height: 100px;
    text-align: right;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 18px;
}
.calculater span{
    display: grid;
    width: 100px;
    height: 100px;
    color: #fff;
    background: #0c2835;
    place-items: center;
    border: 1px solid rgba(0,0,0,0.1);
}
.calculater span:active{
    background: #00ff40;
    color: #111;
}
.calculater span.clear{
    background: #ff3077;
    grid-column: span 2;
    width: 200px;
}
.calculater span.plus{
    grid-row: span 2;
    height: 200px;
}
.calculater span.equal{
    background: #00fff2;
}
.titel{
    position:absolute;
    top:20%;
    left:176%;
    color: #fff;
    font-size:60px;
}
   </style>
   <body>
     <p class="titel">Taschenrechner</p>
     <form class="calculater" name="calc">
         <input class="value" type="text" name="txt" readonly="">
         <span class="num clear" onclick="document.calc.txt.value =''">c</span>
         <span class="num" onclick="document.calc.txt.value +='/'">/</span>
         <span class="num" onclick="document.calc.txt.value +='*'">*</span>
         <span class="num" onclick="document.calc.txt.value +='7'">7</span>
         <span class="num" onclick="document.calc.txt.value +='8'">8</span>
         <span class="num" onclick="document.calc.txt.value +='9'">9</span>
         <span class="num" onclick="document.calc.txt.value +='-'">-</span>
         <span class="num" onclick="document.calc.txt.value +='4'">4</span>
         <span class="num" onclick="document.calc.txt.value +='5'">5</span>
         <span class="num" onclick="document.calc.txt.value +='6'">6</span>
         <span class="num plus" onclick="document.calc.txt.value +='+'">+</span>
         <span class="num" onclick="document.calc.txt.value +='1'">1</span>
         <span class="num" onclick="document.calc.txt.value +='2'">2</span>
         <span class="num" onclick="document.calc.txt.value +='3'">3</span>
         <span class="num" onclick="document.calc.txt.value +='0'">0</span>
         <span class="num" onclick="document.calc.txt.value +='00'">00</span>
         <span class="num" onclick="document.calc.txt.value +='.'">.</span>
         <span class="num equal" onclick="document.calc.txt.value = eval(calc.txt.value)">=</span>
     </form>
     <div style="float:bottom"><button>Logout</button></div>
   </body>

</html>