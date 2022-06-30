class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek = () => this.first;

    enqueue = (value) => {
        const newInLine = new Node(value);
        if (!this.length) {
            this.first = newInLine
            this.last = newInLine;
        } else {
            this.last.next = newInLine;
            this.last = newInLine;
        }
        this.length++
    }

    dequeue = () => {
        const dequeed = this.first;
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }
        this.length--
        return dequeed;
    }

    isEmpty = () => this.length === 0;
}

const myQueue = new Queue();
myQueue.enqueue('Tobi');
myQueue.enqueue('Belu');
myQueue.enqueue('Maria');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir