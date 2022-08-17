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
    addAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
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

const ll = new linkedList();
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.addAtHead(1);
ll.display();
