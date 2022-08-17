class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }
    addAtData(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    display() {
        console.log(this.head);
    }
}
let ll = new linkedList();
ll.addAtData(5);
ll.addAtData(4);
ll.addAtData(3);
ll.addAtData(2);
ll.addAtData(1);

ll.display();
