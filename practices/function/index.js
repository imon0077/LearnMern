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