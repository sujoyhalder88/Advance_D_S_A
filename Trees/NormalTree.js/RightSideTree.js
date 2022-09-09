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
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}
var myarr = [10, 15, 35, 5, 8, 16];

var BST = new BinarySearchTree();
for (let i = 0; i < myarr.length; i++) {
    BST.insert(myarr[i]);
}

var root = BST.getRootNode();

let rightNodes = [];

var rightSideView = function (root) {
    if (root == null) {
        return rightNodes;
    }
    giveRightView(root, 0);
    return rightNodes;
};

function giveRightView(node, level) {
    console.log(node.data + " " + level);
    rightNodes.push(node.data);
    if (node.right != null) {
        giveRightView(node.right, level + 1);
    }
}

rightSideView(root);
