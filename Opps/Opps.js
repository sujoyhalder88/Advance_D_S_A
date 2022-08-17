class product {
    // Data function
    constructor(n, p) {
        console.log("connstutor called !!!!");
        this.name = n;
        this.prize = p;
    }

    //member function
    displayproduct() {
        console.log("name product is ", this.name);
        console.log("prize product is ", this.prize);
    }

    buyproduct() {
        console.log("name buyproduct is ", this.name);
        console.log("prize buyproduct is ", this.prize);
    }
}
let productShow = new product("Iphone", 10000);
// console.log(productShow);
productShow.displayproduct();
productShow.buyproduct();
