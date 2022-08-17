// write a program find prefix sum given input form user?
function prefixSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    console.log(sum);
}
prefixSum(1, 3);
