const array = [ 0, null,undefined,2,3]
console.log(count(array))

function count(array){
    let count = 0;
    for(let value of array)
    if (value)
    count++;
    return count;
}