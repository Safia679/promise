
// ************ Promise ************ //:
// promise has 3 states
// 1:fulfilled 
// 2: pending
// 3: rejected


// 1: Object method
let prom = new Promise(
    function(resolve,reject){
        let complete = true;
        if(complete) {
            resolve("successful");
        } else {
            reject("failed");
        }
    }
);
console.log(prom);
// 2 Function Method with settimeout()
function prom(complete) {
    return new Promise(function(resolve, reject){
    let complete = false;
    setTimeout(() => {
        if (complete) {
            resolve("successful");
        } else {
            reject("failed");
        }
       
    }, 3000);
});
}
prom(true).then((result) => {
    console.log(result);
    });
    prom(false).catch((error) => {
        console.log(error);
        });


// Task given by miss:


function prom2(Number) {
    return promise = new Promise((resolve, reject) => {
        if (Number > 10) {
            resolve("Number is greater than 10")
        } else {
            reject("The number is 10 or less than 10 ")
        }
    });
  
    
}
prom2(20).then((Number)=>{
    console.log(Number);
})
.catch((error)=>{
console.log(error);
})

//  chainPromise Task given by miss:

function chainPromise(num) {
    return new Promise((resolve) => {
        resolve(num);
    });
}

chainPromise(6).then((num)=>{
    return num + 5;
    
})
.then((sum)=>{
    return sum * 2;
})
.then((result)=>{
    console.log(`Result:${result}`);
});
// Another Task:
// Q no 3 write a promise that resolves with "Its sunny " and rejects with "Its raining" Use a random number to stimulate the weather condition
function prom() {
    return new Promise((resolve, reject) => {
        const randomWeather = Math.random();

        if (randomWeather > 0.5) {
            resolve("It's  sunny!")
        } else {
            reject("It's Raining")
        }
    })
}
prom()
.then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.log(error);
  });
console.log(prom());

// ************ Closure ************ //:
// Closure :

// A clousure is a function having access to the parent scope.It preserves the data from outside.

// A clousure is an inner function have an access to the outer function variables.

// It has 3 types of scopes:
// 1) Local Scope (inner scope)
// 2) Outer Scope
// 3) Global Scope.
  let n = 6;
function outer() {
    let l = 10;
    function inner() {
        let m = 5;
        console.log(m);
        console.log(l);
        console.log(n);
    }
    inner();
}
outer();

          // ************ Async & Await ************ //:
 async function xy() {
    console.log(1);
    console.log(2);
    await console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
}    
console.log(6);
console.log(7);
console.log(xy());
console.log(8);
console.log(9);
console.log(10);
console.log(11);