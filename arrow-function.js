// traditional way to write function
let add=function(n1, n2){
    return n1+n2;
}
console.log(add(1, 2));

// method 1: arrow function to write function
let add2=(n1, n2)=>(n1+n2);
console.log(add2(1, 2));

// method 2: arrow function to write function
let add3=(n1, n2)=>{
    return n1+n2;
};
console.log(add3(1, 2));

// question
let f=()=>(5);
let result=f();
// console.log(result);  // ?
// answer
console.log(result);  // 5

// question
let g=(message)=>{
    console.log(message);
};
// g("Hello, arrow function?");  // ?
g("Hello, arrow function?");  // Hello, arrow function?

// anonymous function
setTimeout(function(){
    console.log("1 second passed.");
}, 1000);

// use arrow function to write anonymous function
setTimeout(()=>{
    console.log("1 second passed.");
}, 1000)
