
function findMin(arr) {
    if(arr.length === 0){
        return undefined;
    }
    return Math.min(...arr);
}

function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}

let nums = [1,5,3,6,2]
console.log("Min val:", findMin(nums));
console.log("Max val:", findMax(nums));