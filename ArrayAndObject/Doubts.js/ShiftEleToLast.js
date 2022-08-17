//Given an array of integers, of length n, modify the array such that all the negative numbers are shifted to the last.
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function shiftToLast(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let i = 0;
    let k = 0;
    let j = arr.length - 1;
    while (k <= j) {
        if (arr[k] < 0) {
            // if element is negative we swap it with the element at j, and negative section increases
            swap(arr, k, j);
            j--;
        } else {
            // if element is positive we just move ahead with i, and positive section increases
            i++;
            k++;
        }
    }
}
const arr = [1, -1, 2, -3, 1];
shiftToLast(arr);
console.log(arr);
