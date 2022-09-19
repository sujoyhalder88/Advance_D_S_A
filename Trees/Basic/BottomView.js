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
        if (level > this.mp[axis][1]) {
            this.mp[axis] = [root.data, level];
        }
    }
    pre(root.left, axis - 1, level + 1);
    pre(root.right, axis + 1, level + 1);
}
var bottomView = function (root) {
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
root.left = new Node(8);
root.right = new Node(15);
root.left.left = new Node(3); // leaf
root.right.right = new Node(20); // leaf
root.left.right = new Node(9); // leaf
root.left.right.right = new Node(7);
root.left.right.right.left = new Node(6);

console.log(bottomView(root));
