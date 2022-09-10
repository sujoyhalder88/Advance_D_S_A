class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertHelper(x, root) {
        if (root == null) {
            return new Node(x);
        }
        if (x < root.data) {
            // x should go to the lst
            root.left = this.insertHelper(x, root.left);
        } else {
            // x should go to the rst
            root.right = this.insertHelper(x, root.right);
        }

        return root;
    }

    insert(x) {
        if (this.root == null) {
            this.root = new Node(x);
            return;
        }
        this.insertHelper(x, this.root);
    }
}

function findSearchBST(root, x) {
    if (root == null) return false;
    if (root.data == x) return true;

    if (x < root.data) {
        return findSearchBST(root.left, x);
    } else {
        return findSearchBST(root.right, x);
    }
}
let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(45);
bst.insert(19);
bst.insert(3);

console.log(findSearchBST(bst.root, 3));
// bst.preorder();
