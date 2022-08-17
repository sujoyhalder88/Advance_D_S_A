class A {
    constructor() {
        this.x = undefined;
    }
    disPlay() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super();
        this.y = 10;
    }
}

class C extends A {
    constructor() {
        super();
        this.z = 9;
    }
}
let bobj = new B();
console.log(bobj);
let cobj = new C();
console.log(cobj);

//========================XXXX========================
class A {
    constructor() {
        this.x = undefined;
    }
    display() {
        console.log(this.x);
    }
}

class B extends A {
    // B-> child, A -> parent
    constructor() {
        super(); // calls the parent constructor
        this.y = 10;
    }
}

class C extends A {
    constructor() {
        super();
        this.z = 9;
    }
}

const bObj = new B();
console.log(bObj);
const cObj = new C();
console.log(cObj);
