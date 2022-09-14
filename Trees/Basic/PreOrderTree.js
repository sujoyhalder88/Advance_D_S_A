class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function preOrder(node) {
    if (node == null) return;
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
}

function inOrder(node) {
    if (node == null) return;
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
}

let ans = -Infinity;

function getmax(root) {
    if (root == null) return;
    if (root.data > ans) ans = root.data;
    getmax(root.left);
    getmax(root.right);
    if (root.data == ans) {
        console.log(ans);
    }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(13);
root.right.right = new Node(20);
root.left.left = new Node(3);
root.left.right = new Node(4);

// preOrder(root);
// console.log("********");
// inOrder(root);
getmax(root);
