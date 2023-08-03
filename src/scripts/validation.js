const button = document.querySelector('#submit');
const form = document.querySelector('form');
const sendForm = document.querySelector('.send-form');

button.addEventListener('click', (e) =>{
  console.log("Button");
  e.preventDefault();
  if(valEmpty('#name') && valEmpty('#number') && valEmpty('#month') && valEmpty('#year') &&  valEmpty('#cvc')){ 
    form.style.display = 'none';
    sendForm.style.display = 'flex';

  }
})

const valEmpty = (input) => {
  const inputField = document.querySelector(input);
  if (inputField.value === ""){
    error(inputField, "Can't be blank");
    return false;
  }else{
    clear(inputField);
    return true;
  }
}

const validate = (input, max, type) =>{
  const inputField = document.querySelector(input);

  inputField.addEventListener("change", (e) =>{
    inputField.value.length < max ? error(inputField, `Need ${max} ${type}`) : clear(inputField);
  }
)}


const valDate = (inputYear, inputMonth) => {
  const inputY = document.querySelector(inputYear);
  const inputM = document.querySelector(inputMonth);
  const currentDate = new Date();

  inputY.addEventListener("change", (e) =>{
    let date = new Date( `20${inputY.value}` , inputM.value - 1, 1 );
   
    if(date.getTime() < currentDate.getTime()){
      error(inputY, "Invalid Date")
      error(inputM, "Invalid Date")
    }else {
      clear(inputY);
      clear(inputM);
    }
  })
}

validate("#name", 10, "characters");
validate("#number", 16, "number");
validate("#cvc", 3, "number");
valDate("#year", "#month");

const error = (input , message) => {
  input.classList.add('error');
  const span = input.nextElementSibling;
  span.classList.add('error');
  span.innerHTML = message;
} 

const clear = input => {
  input.classList.remove('error');
  const span = input.nextElementSibling;
  span.classList.remove('error');
  span.innerHTML = "";
}

