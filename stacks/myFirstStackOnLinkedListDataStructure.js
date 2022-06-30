class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek = () => !this.isEmpty() ? this.top : 'There is nothing in stack';


    push = (value) => {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        if (this.length === 0) {
            this.bottom = this.top;
        }
        this.length++
    }

    pop = () => {
        if (!this.isEmpty()) {
            const poppedElement = this.top.next;
            this.top = poppedElement;
            this.length--
            if (!this.length) {
                this.bottom = null;
            }
            return poppedElement;
        } else {
            return undefined;
        }

    }
    isEmpty() {
        return !this.top
    }
}

const myStack = new Stack();
myStack.push(3);
myStack.push(1);
myStack.push(2);
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack);
console.log(myStack.isEmpty())
console.log(myStack.peek())



//Discord
//Udemy
//google