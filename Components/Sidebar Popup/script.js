
var breadbtn = document.getElementById("bread-button")

var sidebar = document.querySelector(".sidebar")

var count = 0

breadbtn.addEventListener("click",function()
{
    
    
    count = count + 1
    if(count==1)
    {

        sidebar.style.marginLeft = "0vw"
    }
    else if(count==2)
    {
        
        sidebar.style.marginLeft = "-100vw"
        count = 0
    }
    console.log(count);
    
})

var cancelbtn = document.getElementById("cancelmark")

cancelbtn.addEventListener("click",function()
{
    console.log("fd");
    sidebar.style.marginLeft = "-100vw"

})