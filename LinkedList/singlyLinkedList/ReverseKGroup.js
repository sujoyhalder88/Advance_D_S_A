class Node {
    constructor(d) {
        this.data = d; // data parameter represents the actual data stored in node
        this.next = null; // this will be a ref to the next node connected to the curr node
    }
}

class LinkedList {
    // singly
    constructor() {
        // when we initialise a new linked list head will be empty
        this.head = null;
        this.start = null; // temporary variable for problem solving
        this.flag = null; // temporary variable for problem solving
    }

    addAtHead(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        let newNode = new Node(data); // created a new node
        newNode.next = this.head; // set the next of new node to head
        this.head = newNode; // update the head to the new node
    }

    display() {
        /**
         * Time: O(n)
         * Apace: O(1)
         */
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    getHead() {
        return this.head;
    }
}

let reverseKGroup = function (head, k) {
    // Create a pointer which will traverse the head
    let curr = head;

    // Create a counter to determine how many nodes we have traversed
    let count = 0;

    // Loop until we find either the end of the LinkedList, or the k + 1 node
    while (curr != null && count != k) {
        curr = curr.next;
        count++;
    }

    // If we have found the k + 1 node
    if (count == k) {
        // Attempt to reverse the next k nodes (will return the value of curr if not enough nodes)
        curr = reverseKGroup(curr, k); // reverse list with k+1 node as head

        // Loop through the number of nodes in this group
        while (count-- > 0) {
            // Flip the nodes to point in the opposite direction (reverse them)
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }

        // Swap the current head for the reversed one
        head = curr;
    }
    return head;
};

let l1 = new LinkedList();
l1.addAtHead(6);
l1.addAtHead(5);
l1.addAtHead(4);
l1.addAtHead(3);
l1.addAtHead(2);
l1.addAtHead(1);

l1.head = reverseKGroup(l1.getHead(), 2);
l1.display();
