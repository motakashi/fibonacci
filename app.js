'use strict';

let fibonacci_memory = new Map();

fibonacci_memory.set(0, 0);
fibonacci_memory.set(1, 1);

function fibonacci(n){

    if(fibonacci_memory.has(n)){
        return fibonacci_memory.get(n);
    }

    let fibonacci_value = fibonacci(n-2)+fibonacci(n-1);
    fibonacci_memory.set(n, fibonacci_value);
    return fibonacci_value;
}

const length = 40;
for (let index = 0; index < length; index++) {
    console.log(fibonacci(index));
}