// declare traditional variable
const a=5;
console.log(a);

// new declaration for variable in ES6
let x;
let y=3;
console.log(x);
console.log(y);

// declare consttant
const PI=3.1415926;
console.log(PI);



// the scope of var is based on function
console.log("var below");
// code section 1
for (var i=0;i<3;i++){
    console.log(i);
}
console.log(i);  // 3

// code section 2
function test(){
    for (var j=0;j<3;j++){
        console.log(j);
    }
}
// console.log(j);  // ReferenceError: j is not defined



// the scope of let is based on the code section "(...)"
console.log("let below");
// code section 3
for (let k=0;k<3;k++){
    console.log(k);
}
// console.log(k);  // ReferenceError: k is not defined

// code section 4
function test2(){
    for (let l=0;l<3;l++){
        console.log(l);
    }
}
// console.log(l);  // ReferenceError: l is not defined


// var can be modified
// let can be not assigned when declaring
// const cannot be modified
var v=3
v="Hello JavaScript"

let l;
l=0  // can be modified

// const z; // SyntaxError: Missing initializer in const declaration, needed to be assigned value when declaring
const c=100;  // correct
c=50;  // TypeError: Assignment to constant variable., cannot be modified