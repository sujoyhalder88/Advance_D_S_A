class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}
class linkedlist {
    constructor() {
        this.head = null;
    }
    addAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    removedAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }
    addAtTail(data) {
        if (this.head == null) {
            this.addAtHead(data);
            return;
        }
        let tail = this.head;
        while (tail.next != null) tail = tail.next;
        let newNode = new Node(data);
        tail.next = newNode;
    }

    removeAtTail() {
        if (this.head == null) return;
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        let temp = this.head;
        while (temp.next.next !== null) {
            temp = temp.next;
        }
        temp.next = null;
    }
    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let ll = new linkedlist();
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.addAtHead(1);
ll.display();
console.log("............");
ll.removeAtTail();
ll.display();
console.log("............");
ll.removedAtHead();
ll.display();
