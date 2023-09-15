var slider = document.querySelector(".slider-container")

var leftbtn = document.getElementById("leftbtn")
var rightbtn = document.getElementById("rightbtn")

leftbtn.addEventListener("click",function()
{
    console.log("Fdff");
    
    slider.scrollBy({
        top:0,
        left:200,
        behavior:"smooth"
    })
})

rightbtn.addEventListener("click",function()
{
    console.log("Fdfssdgsdgf");

    slider.scrollBy({
        top:0,
        left:-200,
        behavior:"smooth"
    })
})