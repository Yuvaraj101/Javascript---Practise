img = document.querySelectorAll(".box")

console.log(img);

window.addEventListener("scroll",function(){

    height = window.innerHeight

    img.forEach(function(el)
    {
        console.log(el);
        var boxy = el.getBoundingClientRect().top
        if (boxy > height){
            el.style.opacity = 0

        }
        if (boxy < height){
            el.style.opacity = 1
        }
    })
    
    // var boxy = img.getBoundingClientRect().top

})