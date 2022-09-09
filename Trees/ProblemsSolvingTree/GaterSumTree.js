let sumUptilNow = 0;
function revin(root) {
    if (root == null) return;
    revin(root.right);
    root.val += sumUptilNow;
    sumUptilNow = root.val;
    revin(root.left);
}

var bstToGst = function (root) {
    sumUptilNow = 0;
    revin(root);
    return root;
};
