
// var num = 1 

// for(i=2;i<=5;i++)
// {
//     num = num * i
// }
// console.log(num);

//using recursion

function fact(n)
{
    if(n==0 || n==1)
    {
        return true;
    }
    else{

        return n*fact(n-1)
    }
}

console.log(fact(5));

