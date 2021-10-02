'use strict';

function fibonacci(n){
    if(n === 0){
        return 0;
    }

    if(n === 1){
        return 1;
    }

    return fibonacci(n-2)+fibonacci(n-1);

}

const length = 40;
for (let index = 0; index < length; index++) {
    console.log(fibonacci(index));
}