// ---TO CHANGE THE 'THEMES'---
const button = document.querySelector('#btn');
const toggle = document.querySelector('.toggle');

const bodyClass = document.body.classList;// to toggle between themes using different classes;

   // few fixes for theme one ('color' issue);
   const topSection = document.querySelector('.top');
   const outputScreen = document.querySelector('.screen')
   function topColor(){
      topSection.style.color = 'white';
      outputScreen.style.color = 'white';
   }
   topColor();


let theme = 1, margLeft = 3;// default values of the two;
button.addEventListener('click', (e) => { 
      theme += 1; 

      if(theme!=1){// remove the color for other themes applied above;
         topSection.style.color = '';
         outputScreen.style.color = '';
      }


      if(theme>3){// reset all the default values;
         theme=1;
         margLeft = 3;
         bodyClass.remove('theme2', 'theme3');
         topColor();
      }
      else if(theme<=3){
         margLeft += 17;
      } 
      
      bodyClass.add('theme' + theme);// add themes accrodingly;
      toggle.style.marginLeft = margLeft + 'px';// add margin to 'toggle' respectively;
   });


// ---FOR CALCULATION---;
let output = document.querySelector('.output');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const others = document.querySelectorAll('.key1');

let ans = '';

   numbers.forEach((number) => {
      number.addEventListener('click', () => { 
         print(number.innerText);
      });
   });   
   
   operators.forEach((operator) => {
      operator.addEventListener('click', () => {
         operation(operator.innerText);
        });
   });

   others.forEach((other) => {
      other.addEventListener('click', () => {
         otherFunctions(other.innerText);
      });
   });
        

// for 'reset' and 'delete';   
function otherFunctions(ch){
   if(ch=='RESET'){
      output.innerText = ' ';
      ans = '0';
   }
   else if(ch=='DEL'){
      ans = ans.substr(0, ans.length-1);
      output.innerText = ans;
   }
}

// to perform the operation;
function operation(op){   
   let x = eval(ans);   
         
   ans = x; // update the evaluated answer;

   if(op == '='){// do not append '=' sign;
      print('');
   }   
   else if(op == 'x'){// 'multiply';
     ans += '*';
     output.innerText = ans;
   }
   else{
      print(op);
   }
}

// diplays the 'numbers';
function print(ch){
   ans += ch;
   output.innerText = ans;
}