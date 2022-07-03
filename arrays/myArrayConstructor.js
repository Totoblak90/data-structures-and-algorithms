class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    forEach() {
        let counter = 0;
        while (counter < this.length) {
            console.log(
                this.data[counter]
            )
            counter++
        }
    }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('!');
myArray.push('you');
myArray.push('are');
myArray.push('nice');
console.log(
    myArray.forEach()
)