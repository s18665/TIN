function Fibonacci(number){
    if(number===0) return 0;
    if(number===1) return 1;
    return Fibonacci(number-1)+Fibonacci(number-2);
}

console.log(Fibonacci(11))