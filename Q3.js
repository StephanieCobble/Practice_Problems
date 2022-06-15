//Given a number, n, print the first nth element of the Fibonacci sequence. If n = 5, 
//print the fifth Fibonacci number.

//Fibonacci sequence looks like: 1, 1, 2, 3, 5, 8, 13, 21, 34…

// Step 1: fibonacci(4) + fibonacci(3) 
// Step 2: (fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1)) 
// Step 3: ((fibonacci(2) + fibonacci(1)) + 1) + (1 + 1) 
// Step 4: ((1 + 1) + 1) + (1 + 1)
// Answer = 5

function fib(n){
    if (n<=2) return 1;
    return fib(n-1) + fib(n-2);
}
n=6
console.log(fib(n))