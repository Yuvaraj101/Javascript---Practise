// note :
// Filter method returns an new array which 
// satisfies the provided function within 
// it as a parameter 

const arr = [10,20,30,40,50,60]

const res = arr.filter(ageChk)

function ageChk(e){
    return e >= 20;
}

console.log(arr);
console.log(res);