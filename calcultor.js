let disp = document.getElementsByClassName("display");

function append(value) {
  console.log(value);
  disp[0].textContent = disp[0].textContent + value;
}
function clearDisplay(){
     disp[0].textContent = ""


}
function calculate(){
let expression = display. textContent;
let result = eval(expression)
display.textContent= result;

}
function toggleDarkMode(){
document.body.classList.toggle("dark")

}