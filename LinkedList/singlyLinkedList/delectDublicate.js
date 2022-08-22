var deleteDuplicates = function (head) {
    // Time: O(n)
    let temp = head;
    while (temp != null && temp.next != null) {
        // loop till we dont reach the tail or surpass the tail as there wont be duplicate
        //s after tail
        let nextNode = temp.next;
        while (nextNode != null && temp.val == nextNode.val) {
            // this loop removes the duplicate
            temp.next = nextNode.next;
            nextNode.next = null;
            nextNode = temp.next;
        }
        temp = temp.next;
    }
    return head;
};
