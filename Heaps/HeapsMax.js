class MaxHeap {
    constructor() {
        this.arr = [];
    }
    upheapify(index) {
        /**
         * time:O(logN)
         * space:O(1)
         */
        while (index > 0) {
            // we cannot upheapify root, we will stop the loop, when we reach root
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.arr[parentIndex] < this.arr[index]) {
                // if parent is less than child, swap them
                let temp = this.arr[parentIndex];
                this.arr[parentIndex] = this.arr[index];
                this.arr[index] = temp;
                //move upwards
                index = parentIndex;
            } else {
                // alread a max heap
                break;
            }
        }
        console.log(this.arr);
    }
    insert(x) {
        //this function inserts x correctly in max heap
        this.arr.push(x);
        this.upheapify(this.arr.length - 1); // arr.len - 1 is the index on which x is added
    }
}
let hp = new MaxHeap();
hp.insert(10);
hp.insert(25);
hp.insert(8);
hp.insert(13);
hp.insert(6);
hp.insert(9);
hp.insert(11);
