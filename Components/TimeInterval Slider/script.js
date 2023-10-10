leftbtn = document.getElementById("leftbtn")
rightbtn = document.getElementById("rightbtn")

slider = document.querySelector(".slider-container")

var margin = 0
leftbtn.addEventListener("click",function()
{
    if(margin<200)
    {
        margin = margin + 100

        slider.style.marginLeft = "-" + margin + "vw"
    }
    else
    {
        margin = 0
        slider.style.marginLeft = "-" + margin + "vw"
    }
})

rightbtn = document.getElementById("rightbtn")

rightbtn.addEventListener("click",function()
{
   
    if(margin<0)
    {
        margin = 200
        slider.style.marginLeft = "-" + margin + "vw"
    }
    else
    {
        margin = margin - 100
       
        slider.style.marginLeft = "-" + margin + "vw"

    }

})



setInterval(() => {
    if(margin<200)
    {
        margin = margin + 100

        slider.style.marginLeft = "-" + margin + "vw"
    }
    else
    {
        margin = 0
        slider.style.marginLeft = "-" + margin + "vw"
    }
}, 5000);
