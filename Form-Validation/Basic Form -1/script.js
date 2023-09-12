var phonechk = false
var usernamechk = false



//containers

var usernamecontainer = document.querySelector(".username")
var phonecontainer = document.querySelector(".phone")

//selecting icons

var usernameicon = usernamecontainer.querySelector("i")
var phoneicon = phonecontainer.querySelector("i")

//selecting labels

var usernamelabel = usernamecontainer.querySelector("label")
var phonelabel = phonecontainer.querySelector("label")

//selecting inputbox

var usernameInput = document.getElementById("username")
var phoneinput = document.getElementById("phone")

usernameInput.addEventListener("keyup",function()
{
    var enteredvalue = usernameInput.value

    if(enteredvalue == "")
    {
        usernamelabel.style.visibility="visible"
        usernameicon.style.visibility="hidden"
        usernamechk = false
    }
    else{
        usernamelabel.style.visibility="hidden"
        usernameicon.style.visibility="visible"
        usernamechk = true
        
    }
})

phoneinput.addEventListener("keyup",function()
{
    var enteredvalue = phoneinput.value

    if(enteredvalue == "")
    {
        phonelabel.style.visibility="visible"
        phoneicon.style.visibility="hidden"
        phonechk = false
    }
    
    else if(enteredvalue.length < 10 || enteredvalue.length > 10)
    {
        phonelabel.textContent = "Phone Number must be of 10 values"
        phonelabel.style.visibility="visible"
        phoneicon.style.visibility="hidden"
        phonechk = false
    }
    
    else{
        phonelabel.style.visibility="hidden"
        phoneicon.style.visibility="visible"
        phonechk = true
        
    }
})


var submitbutton = document.getElementById("submitbutton")
var popup = document.getElementById("popup")

submitbutton.addEventListener("click",function(event)
{
    event.preventDefault()

    if(phonechk == true && usernamechk==true)
    {
    popup.textContent = "Form submitted successfully"
    popup.style.opacity="1"
    popup.style.top="10px"

}

else
{
    popup.textContent = "Please fill the form first"
    popup.style.opacity="1"
    popup.style.top="10px"
    
    popup.style.backgroundColor="red"
    popup.style.color="white"
}

setTimeout(() => {
    popup.style.top="-80px"
    popup.style.opacity="0"
    
}, 1500);

})




