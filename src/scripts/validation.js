const button = document.querySelector('button');

function checksize(input) {
  const inputField = document.querySelector(input);
  return inputField.value > 12 ? error(input, "Invalid") : clear(inputField);
}


button.addEventListener('click', (e) =>{
  e.preventDefault();

  validate("#name")
  validate("#number")
  validate("#month")
  validate("#year")
  validate("#cvc")

})



const validate = (input) =>{
  const inputField = document.querySelector(input);
  return inputField.value === "" ? error(inputField, "Can't be blank") : clear(inputField);
}


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