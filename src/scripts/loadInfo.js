
//check if is a number 
function isReallyNumber(data) {
  return /[0-9]/.test(data.key);
}
//check if is a letter
function isLetter(data){
  return String.fromCharCode(data.keyCode).match(/[A-Za-z ]/i) && !data.key.match(/[0-9]/);
}

//function take the input, the label, the max or char and the function to test
const loadOnKeyDown= (input, label, max, match ) =>{
      let result = "";
      //to check special char
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      input = document.querySelector(input);
      label = document.querySelector(label);

      
      input.addEventListener('keydown', (e) =>{
                
        if(result.length < max && match(e) && !specialChars.test(e.key)){
            
          result += e.key; 
          if(isReallyNumber(e)){ // every 4 number insert a whitespace
            result.length === 4 ? result += " ": "";
            result.length === 9 ? result += " ": "";
            result.length === 14 ? result += " ": "";
          }
          label.innerHTML = result;

        }else if(e.key === 'Backspace') {
          result = result.substring(0, result.length - 1);
          label.innerHTML = result;

        }
        else{
          e.preventDefault();
        }
     })
}





loadOnKeyDown('#name', '.name', 20, isLetter);
loadOnKeyDown('#month', '.month', 2, isReallyNumber);
loadOnKeyDown('#year', '.year', 2, isReallyNumber);
loadOnKeyDown('#cvc', '.code-number', 3, isReallyNumber);
loadOnKeyDown('#number',".card-number", 19, isReallyNumber);