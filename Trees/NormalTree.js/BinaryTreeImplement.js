class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getRootNode() {
        return this.root;
    }

    insert(data) {
        var newNode = new Node(data);

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            //Left case
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } // Right Case
        else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(
        node //left.root.right
    ) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder(
        node //root left right
    ) {
        if (node !== null) {
            console.log(node.data);
            this.inOrder(node.left);
            this.inOrder(node.right);
        }
    }

    postOrder(
        node // left right root
    ) {
        if (node !== null) {
            this.inOrder(node.left);
            this.inOrder(node.right);
            console.log(node.data);
        }
    }
}
//15,25,10,7,22,17,13,5,9,27
var myarr = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];

var BST = new BinarySearchTree();
for (let i = 0; i < myarr.length; i++) {
    BST.insert(myarr[i]);
}

var root = BST.getRootNode();
// console.log(root);
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
BST.postOrder(root);
