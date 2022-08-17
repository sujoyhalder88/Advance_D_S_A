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

function subarray(n) {
    for (let i = 0; i < n.length; i++) {
        let subarr = [];
        for (let j = i; j < n.length; j++) {
            subarr.push(n[j]);
            console.log(subarr);
        }
    }
}
subarray([1, 2, 3]);
