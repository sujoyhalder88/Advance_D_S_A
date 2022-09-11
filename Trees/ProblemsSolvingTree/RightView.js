// leet code problems

// let maxLevel = -1; // max level stores the maximum level seen so far
// let result = [];
// function rightView(root, level) {
//     if (root == null) return;
//     if (level > maxLevel) {
//         // this is the first time we are hitting this level
//         maxLevel = level;
//         result.push(root.val);
//     }
//     rightView(root.right, level + 1);
//     rightView(root.left, level + 1);
// }

// var rightSideView = function (root) {
//     result = [];
//     maxLevel = -1;
//     rightView(root, 0);
//     return result;
// };

//===================================================================//

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

let maxLevel = -1; // max level stores the maximum level seen so far
let result = [];
function rightView(root, level) {
    if (root == null) return;

    if (level > maxLevel) {
        // this is the first time we are hitting this level
        maxLevel = level;
        result.push(root.data);
    }

    rightView(root.right, level + 1);
    rightView(root.left, level + 1);
}
var rightSideView = function (root) {
    result = [];
    maxLevel = -1;
    rightView(root, 0);
    console.log(result);
    // return result;
};

let root = new Node(10); // root
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(26); // leaf
root.left.right = new Node(34); // leaf
root.right.right = new Node(40); // leaf
root.left.left.left = new Node(44);
root.left.right.left = new Node(22);
root.left.right.right = new Node(47);
root.left.right.right.right = new Node(58);

rightSideView(root);
