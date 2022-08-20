class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
    }

    addAtHead(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if (this.head == null) {
            let newNode = new Node(data);
            this.head = newNode;
            return;
        }
        let newNode = new Node(data); // created a new node
        newNode.next = this.head; // set the next of new node to head
        this.head.prev = newNode;
        this.head = newNode; // update the head to the new node
    }

    removeAtHead() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if (this.head == null) return;
        let temp = this.head.next; // stored access to new head
        temp.prev = null; // we need to mark the prev of the new head to null
        this.head.next = null; // de linked the old head
        this.head = temp; // updated the head
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
}
const dll = new DLL();
dll.addAtHead(5);
dll.addAtHead(4);
dll.addAtHead(3);
dll.addAtHead(2);
dll.addAtHead(1);
dll.display();
console.log("........");
dll.removeAtHead(5);
dll.display();
console.log("........");
