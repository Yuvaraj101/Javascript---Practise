//this function is called a key is pressed and released
function disp(){
    //selecting the input box
    var inputbox = document.getElementById("inputbox")
    //taking the inputbox value into a variable
    var enteredval = inputbox.value
    //seleting the h1 element
    var head = document.getElementById("result")
    //feeding the inputbox value to the h1 tag
    head.textContent = enteredval
}