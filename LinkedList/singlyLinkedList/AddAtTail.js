class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}
class LinkedList {
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
    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let ll = new LinkedList();
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.addAtHead(1);
ll.display();
console.log("..............");
ll.addAtTail(6);
ll.display();
