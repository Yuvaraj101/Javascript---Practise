
var slider = document.querySelector(".slider-container")
var leftbtn = document.getElementById("left")
var right = document.getElementById("right")

var margin = 0
leftbtn.addEventListener("click",function()
{
    margin = margin + 100
    if(margin > 200)
    {
        margin = 0
        slider.style.marginLeft = "0vw"

    }
    else
    {

        slider.style.marginLeft = "-"+margin+"vw"
    }
    
})

right.addEventListener("click",function()
{
    if(margin < 0)
    {
        margin = 200
        slider.style.marginLeft = "-"+margin+"vw"
        
    }
    else{
        margin = margin - 100
        slider.style.marginLeft = "-"+margin+"vw"

    }
})

//set interval will call the function repeatedly after the specified time
setInterval(() => {
    margin += 100;
    if(margin > 200)
    {
        margin = 0
        slider.style.marginLeft = "-"+ margin + "vw";
    }
    else
    {
        slider.style.marginLeft = "-"+ margin + "vw";

    }
    
}, 4000);

//set timeout will call the function only once after the specified time