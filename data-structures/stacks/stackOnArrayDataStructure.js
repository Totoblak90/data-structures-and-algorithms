class Stack {

    constructor() {
        this._stack = [];
    }

    peek = () => this._stack[this._stack.length - 1];
    push = (value) => this._stack.push(value);
    pop = () => this._stack.pop();
    getStack = () => this._stack;
    length = () => this._stack.length;
    isEmpty = () => this._stack.length === 0;
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack.isEmpty());
console.log(myStack.getStack());
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack.isEmpty());
console.log(myStack.getStack());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack.isEmpty());
console.log(myStack.getStack());
//Discord
//Udemy
//google