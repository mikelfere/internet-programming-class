function sumMultiple(...args){
    let sum = 0;
    for(let a of args){
        sum+=a;
    }
    return sum;
}

console.log(sumMultiple(1, 2, 3, 3));