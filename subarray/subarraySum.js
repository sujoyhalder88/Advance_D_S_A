function suarraySum(arr) {
    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        for (let end = start; end < arr.length; end++) {
            sum += arr[end];
            if (sum == 0) return true;
        }
    }
    return false;
}
console.log(suarraySum([1, 2, 3, 4]));

//==============================XXXX==================================

function suarraySum(arr) {
    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        for (let end = start; end < arr.length; end++) {
            sum += arr[end];
        }
        return sum;
    }
}
console.log(suarraySum([1, 2, 3, 4]));
