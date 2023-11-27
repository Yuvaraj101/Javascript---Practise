
// const arr = ['hi','hello','how','are','you']

// console.log(arr);

// const res = [...arr,'1','2']

// console.log(res);

// ---------------------
// objects 

const cars = {
    brand : 'bmw',
    model : 'm5 comp',
    color : 'green yellow'

}

const cars2 = {
    prod : 'speed',
    type : 'auto',
    color : 'white'
}

const res = {...cars , ...cars2}

console.log(res);
