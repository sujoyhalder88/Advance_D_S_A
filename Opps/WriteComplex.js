//Let’s write a complex number class.
class Complex {
    #real;
    #imag;
    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }
    getReal() {
        return this.#real;
    }
    getImag() {
        return this.#imag;
    }
    setReal(r) {
        this.#real = r;
    }
    setImag(i) {
        this.#imag = i;
    }
    display() {
        console.log(`${this.#real} + i${this.imag}`);
    }
    add(c) {
        this.#real += c.getReal();
        this.#imag += c.getImag();
    }
}
let access = new Complex();
access.display();
//==========================XXX=============================
// function product(n, p) {
//     console.log("this at start", this);
//     this.name = n;
//     this.price = p;
//     console.log("this at end", this);
//     // return {marks: 100}
//     return 100;
// }
// const iphone = new product("iphone", 100000);

// console.log(iphone);
