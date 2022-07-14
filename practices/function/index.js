console.log('script loaded');

function outer(x){
    function inner(y){
        return x + y;
    }
    return inner;
}

let temp = outer(10);

let newtemp = temp(20);

console.log(temp);
console.log(newtemp);
console.log('========================');

const newouter = (x) => {
    const inner = (y) => x+y;
    return inner;
}

let tempresult = newouter(10);
// let tempresult = newouter(10)(20);

console.log(tempresult);
console.log(tempresult(20));

console.log('=========== Self executing function =============');

let selfFucn = (() => { return new Date(); })();

console.log(selfFucn);

console.log('=========== scope | same variable inside & outeside func =============');

var n= 10;

const change = () => {
    var n = 20;
}

change();

console.log(n);  // it will show 10 which is outside of change function 

var m = { x: 10};

const newChange = (m) => {
    m = {x:30};
}

newChange(m);
console.log(m);  // it will show x : 10

const newChange1 = (m) => {
    m.x = 30;
}

newChange1(m);
console.log(m);  // it will show x : 30 

console.log('=========== input types as object =============');

function inputType1(obj){
    console.log(obj);
}

inputType1(10);
inputType1({name: 'MERN'});

function inputType2({name}){
    console.log(name);
}

inputType2({name: 'hello'});