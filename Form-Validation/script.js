
var namechk = false
var phonechk = false
var emailchk = false
var passchk = false
var confpasschk = false

//username container
var username = document.querySelector(".username")
//username inout
var usernameInput = username.querySelector("#username")
//user icon selection
var usericon = username.querySelector("#usericon")
//user label selection
var userlabel = username.querySelector("label")

usernameInput.addEventListener("keyup",function()
{
   
    var enteredval = usernameInput.value

    if(enteredval == "")
    {
        usericon.style.visibility = "hidden"
        userlabel.style.visibility = "visible"
        phonechk = false

    }
    else
    {
        usericon.style.visibility = "visible"
        userlabel.style.visibility = "hidden"
        namechk = true

    }
})

//phone container
var phone = document.querySelector(".phone")
//phone input
var phoneInput = phone.querySelector("#phone")
//phone icon selection
var phoneicon = phone.querySelector("#phoneicon")
//phone label selection
var phonelabel = phone.querySelector("label")

phoneInput.addEventListener("keyup",function()
{
    var enteredvalue = phoneInput.value

    if(enteredvalue.length < 10 || enteredvalue.length > 10)
    {
        phoneicon.style.visibility = "hidden"
        phonelabel.style.visibility = "visible"
        phonechk = false
    }
    else
    {
        phoneicon.style.visibility = "visible"
        phonelabel.style.visibility = "hidden"
        phonechk = true
    }

})

//phone container
var email = document.querySelector(".email")
//phone input
var emailInput = email.querySelector("#email")
//phone icon selection
var emailicon = email.querySelector("#emailicon")
//phone label selection
var emaillabel = email.querySelector("label")

emailInput.addEventListener("keyup",function()
{
    var enteredvalue = emailInput.value
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(enteredvalue.match(emailregex))
    {
        emailicon.style.visibility = "visible"
        emaillabel.style.visibility = "hidden"
        emailchk = true
    }
    else
    {
        emailicon.style.visibility = "hidden"
        emaillabel.style.visibility = "visible"
        emailchk = false
    }
})

//phone container
var password = document.querySelector(".password")
//phone input
var passwordInput = password.querySelector("#password")
//phone icon selection
var passowordicon = password.querySelector("#passicon")
//phone label selection
var passwordlabel = password.querySelector("label")

passwordInput.addEventListener("keyup",function()
{
    var passev = passwordInput.value
    var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if(passev.match(passwordregex))
    {
        passowordicon.style.visibility = "visible"
        passwordlabel.style.visibility = "hidden"
        passchk = true
    }
    else
    {
        passowordicon.style.visibility = "hidden"
        passwordlabel.style.visibility = "visible"
        passchk = false
    }
       
})

//phone container
var confpass = document.querySelector(".confirm-password")
//phone input
var confInput = confpass.querySelector("#confirmpass")
//phone icon selection
var conficon = confpass.querySelector("#conficon")
//phone label selection
var conflabel = confpass.querySelector("label")

confInput.addEventListener("keyup",function()
{
    var enteredvalue =confInput.value
    var passwordInput = password.querySelector("#password")
    var passev = passwordInput.value
    
   
    if(enteredvalue == passev)
    {
        conficon.style.visibility = "visible"
        conflabel.style.visibility = "hidden"
        confpasschk = true

    }
    else
    {
        conficon.style.visibility = "hidden"
        conflabel.style.visibility = "visible"
        confpasschk = false

    }
})

//submit button
var submitbtn = document.getElementById("submitbtn")
var formpara = document.querySelector(".formpara")

submitbtn.addEventListener("click",function(e)
{
    e.preventDefault()
    
    if(namechk && phonechk && emailchk && passchk && confpasschk == true)
    {
        formpara.textContent="Form Submitted Successfully"
        formpara.style.top="0px"
        formpara.style.opacity="1"
    }
    else
    {
        formpara.textContent="Please fill the form first"
        formpara.style.top="0px"
        formpara.style.opacity="1"
    }

    setTimeout(() => {
        
        formpara.style.top="-100px"
        formpara.style.opacity="0"
    }, 2000);


})