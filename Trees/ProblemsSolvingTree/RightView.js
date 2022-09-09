let maxLevel = -1; // max level stores the maximum level seen so far
let result = [];
function rightView(root, level) {
    if (root == null) return;
    if (level > maxLevel) {
        // this is the first time we are hitting this level
        maxLevel = level;
        result.push(root.val);
    }
    rightView(root.right, level + 1);
    rightView(root.left, level + 1);
}

var rightSideView = function (root) {
    result = [];
    maxLevel = -1;
    rightView(root, 0);
    return result;
};
