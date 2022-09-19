class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

var hd = 0;
var mp = {};
var queue = [];
function bottomView(root) {
    if (root == null) return;
    root.hd = hd;
    queue.push(root);

    while (queue.length != 0) {
        var temp = queue.shift();
        hd = temp.hd;
        mp[hd] = temp.data;

        if (temp.left != null) {
            temp.left.hd = hd - 1;
            queue.push(temp.left);
        }

        if (temp.right != null) {
            temp.right.hd = hd + 1;
            queue.push(temp.right);
        }
    }

    for (const [d, value] of Object.entries(mp).sort((a, b) => a[0] - b[0])) {
        console.log(value);
    }
}

let root = new Node(10); // root
root.left = new Node(8);
root.right = new Node(15);
root.left.left = new Node(3); // leaf
root.right.right = new Node(20); // leaf
root.left.right = new Node(9); // leaf
root.left.right.right = new Node(7);
root.left.right.right.left = new Node(6);

bottomView(root);
