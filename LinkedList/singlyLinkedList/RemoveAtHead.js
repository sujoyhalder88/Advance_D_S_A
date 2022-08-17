//Removing an element from head of the list:

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedLists {
    constructor() {
        this.head = null;
    }
    addAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    removeAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }
    display() {
        // console.log(this.head);
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
const ll = new LinkedLists();
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.addAtHead(1);

ll.display();
ll.removeAtHead();
console.log(".................");
ll.display();
ll.removeAtHead();
console.log(".................");
ll.display();
