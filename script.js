
let string = "";
let buttons = document.querySelectorAll('.button');
console.log("buttons", buttons);
console.log("buttonsArray", Array.from(buttons));

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.innerHTML == '=') {    
      string = eval(string);        
      document.querySelector('input').value = string;  
    }
    else if (event.target.innerHTML == 'c') {    
      string = "";        
      document.querySelector('input').value = string; 
    }
    else if (event.target.innerHTML == "x") {
      string = document.querySelector('input').value = string.slice(0, -1);
    }
    else if(event.target.innerHTML === "%"){
    }
    else {
      console.log(event.target);
      string = string + event.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});