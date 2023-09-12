var num = [10,20,30,40,50]

// for(i=0;i<num.length;i++)
// {
//     console.log(num[i]);
// }

num.forEach(
    //each element of the array will be stored in n everytime the function is called
    function(n)
    {
        console.log(n);
    }
)