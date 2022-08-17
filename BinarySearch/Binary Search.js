//Given a sorted array and an element X, check if the element is repeated.
//Example: [1,2,3,3,4,5,5,6,7,7,8,8,8,9,11,13,13] , X = 13 → ans yes

//brute Force

// function bruteForceBinary(arr, x) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] == x && arr[i + 1] == x) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(
//     bruteForceBinary([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 11, 13, 13], 7)
// );

//====otimize=======
// function BinarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor(start + end) / 2;
//         if ((arr[mid] = target)) {
//             return true;
//         } else if (arr[mid] > target) {
//             mid = end - 1;
//         } else {
//             mid = start + 1;
//         }
//     }
//     return false;
// }
// console.log(
//     BinarySearch([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 11, 13, 13], 3)
// );
