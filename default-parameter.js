// traditional way for default parameter
function show(message){
    if(typeof message==="undefined"){
        // when not default message data
        message="default!";
    }
    console.log(message);
}
show("Hello!");
show();  // default parameter

// new method 1: for default parameter
function show(message){
    if(typeof message==="undefined"){
        // when not default message data
        message="default!";
    }
    console.log(message);
}
show("Hello!");
show();  // default parameter

// new method 2: arrow function for default parameter
let show2=(message="dafault!")=>{
    console.log(message);
}
show2("Hello!");
show2();  // default parameter

// example 1
function multiply(n1, n2=1){
    return n1*n2;
}
console.log(multiply(3, 4));  // 12
console.log(multiply(5));  //5

// example 1: arrow function
let multiply2=(n1, n2=1)=>(n1*n2);
console.log(multiply2(3, 4));  // 12
console.log(multiply2(5));  //5

// example 2: later parameter can use previous function
function combine(first="Kai", last="Cheng", name=first+" "+last){
    console.log(name);
}
combine("Kai", "Cheng");  // Kai Cheng
combine("Kai");  // Kai Cheng
combine();  // Kai Cheng
