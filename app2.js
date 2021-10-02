'use strict';

let tribonacci_memory = new Map();

tribonacci_memory.set(0, 0);
tribonacci_memory.set(1, 1);
tribonacci_memory.set(2, 1);

function tribonacci(n){

    if(tribonacci_memory.has(n)){
        return tribonacci_memory.get(n);
    }

    let tribonacci_value = tribonacci(n-3)+tribonacci(n-2)+tribonacci(n-1);
    tribonacci_memory.set(n, tribonacci_value);
    return tribonacci_value;
}

const length = 40;
for (let index = 0; index < length; index++) {
    console.log(tribonacci(index));
}