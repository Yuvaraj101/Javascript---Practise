
var slider = document.querySelector(".slider-container")

var left = document.getElementById("btn1")
var right = document.getElementById("btn2")

var margin = 0

left.addEventListener("click",function()
{
    margin = margin + 100
    if(margin > 200)
    {
        margin =0
    }
    slider.style.marginLeft = "-"+margin+"vw"
})

right.addEventListener("click",function()
{
    if(margin < 0)
    {
        margin = 200
        slider.style.marginLeft = "-"+margin+"vw"
        
    }
    else
    {
        margin = margin - 100
        slider.style.marginLeft = "-" + margin + "vw"

    }
})