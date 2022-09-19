class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function printLeaves(root) {
    if (root == null) return;
    printLeaves(root.left);
    if (root.left == null && root.right == null) console.log(root.data);
    printLeaves(root.right);
}

function printBoundaryLeft(root) {
    if (root == null) return;
    if (root.left != null) {
        console.log(root.data);
        printBoundaryLeft(root.left);
    } else if (root.right != null) {
        console.log(root.data);
        printBoundaryLeft(root.right);
    }
}

function printBoundaryRight(root) {
    if (root == null) return;
    if (root.right != null) {
        printBoundaryRight(root.right);
        console.log(root.data);
    } else if (root.left != null) {
        printBoundaryRight(root.left);
        console.log(root.data);
    }
}

function printBoundary(root) {
    if (root == null) return;
    console.log(root.data);
    printBoundaryLeft(root.left);
    printLeaves(root.left);
    printLeaves(root.right);
    printBoundaryRight(root.right);
}

let root = new Node(20);
root.left = new Node(8);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right = new Node(22);
root.right.right = new Node(25);
printBoundary(root);
