class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addAtHead(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    removedAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        if (this.head == null) this.tail = null;
    }
    addAtTail(data) {
        if (this.head == null) {
            this.addAtHead(data);
            return;
        }
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
    }
    getHead() {
        if (this.head == null) return undefined;
        return this.head.data;
    }
}
class Queue {
    constructor() {
        this.ll = new linkedlist();
    }
    enQueue(x) {
        this.ll.addAtTail(x);
    }
    deQueue() {
        this.ll.removedAtHead();
    }
    getFront() {
        return this.ll.getHead();
    }
}

let qu = new Queue();
qu.enQueue(5);
qu.enQueue(4);
qu.enQueue(3);
qu.enQueue(2);
qu.enQueue(1);
console.log(qu.getFront());
console.log(qu);
// console.log("........");
// qu.deQueue();
// qu.deQueue();
// console.log(qu.getFront());
