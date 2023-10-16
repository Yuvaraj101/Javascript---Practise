img = document.querySelectorAll(".box")

// console.log(img);

window.addEventListener("scroll",function(){

    height = window.innerHeight

    img.forEach(function(el)
    {
        // console.log(el);
        var boxy = el.getBoundingClientRect().top
        if (boxy > height){
            el.style.opacity = 0
            el.style.transform = "scale(0.9)"

        }
        if (boxy < height){
            el.style.opacity = 1
            el.style.transform = "scale(0.9)"
        }
    })
    
    // var boxy = img.getBoundingClientRect().top

})

var like = document.querySelectorAll("#like")

like.forEach(function(el)
{
    var res = el.addEventListener("click",function()
    {
        
    })
})
// like.addEventListener("click",function()
// {
//     console.log(like);
//     console.log("gg");
// })