// write a program print all subarray?
// function subarray(n) {
//     for (let i = 0; i < n.length; i++) {
//         for (let j = i; j < n.length; j++) {
//             for (let k = i; k <= j; k++) {
//                 console.log(n[k]);
//             }
//         }
//     }
// }
// subarray([1, 2, 3]);
//[1],[2],[3],[1,2],[1,2,3],[2,3],3
//[1],[1,2],[1,2,3],[2],[2,3],3

//==============================XXXXXX======================
// function subarray(n) {
//     for (let i = 0; i < n.length; i++) {
//         let subarr = [];
//         for (let j = i; j < n.length; j++) {
//             subarr.push(n[j]);
//             console.log(subarr);
//         }
//     }
// }
// subarray([1, 2, 3]);

//========================XXXXXXX=====================
// function maxSlidingWindow(nums, k) {
//     let ans = new Array(nums.length - k + 1);
//     for (let i = 0; i < nums.length - k + 1; i++) {
//         let max = nums[i];
//         for (let j = i; j < i + k; j++) {
//             max = Math.max(max, nums[j]);
//         }
//         ans[i] = max;
//     }
//     return ans;
// }
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

//===================xxx=================================================

// function maxSlidingWindow(nums, k) {
//     let max;
//     for (let i = 0; i <= nums.length - k; i++) {
//         max = nums[i];
//         for (let j = 1; j < k; j++) {
//             if (nums[i + j] > max) {
//                 max = nums[i + j];
//             }
//         }
//         console.log(max);
//     }
// }
// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
