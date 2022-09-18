class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

let mp = {};
function pre(root, axis, level) {
    if (root == null) return;
    if (!this.mp[axis]) {
        this.mp[axis] = [root.data, level];
    } else {
        if (level < this.mp[axis][1]) {
            this.mp[axis] = [root.data, level];
        }
    }
    pre(root.left, axis - 1, level + 1);
    pre(root.right, axis + 1, level + 1);
}
var topSideView = function (root) {
    this.mp = {};
    pre(root, 0, 0);
    let result = [];
    let keys = Object.keys(this.mp).sort((a, b) => a - b);
    for (let i = 0; i < keys.length; i++) {
        result.push(this.mp[keys[i]][0]);
    }
    return result;
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

console.log(topSideView(root));
