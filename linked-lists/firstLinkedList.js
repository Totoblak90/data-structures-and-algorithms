// 10 --> 5 --> 16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value)
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value) {
        const prependedNode = new Node(value);
        prependedNode.next = this.head;
        this.head = prependedNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array);
    }

    insert(index, value) {
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value);

        const nodeToInsert = new Node(value);
        const leader = this._iterateUntilIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = nodeToInsert;
        nodeToInsert.next = holdingPointer;
        this.length++;
    }

    deleteNode(index) {
        if (index >= this.length) index = this.length - 1;

        const leader = this._iterateUntilIndex(index - 1);
        const deleteReference = leader.next.next;
        leader.next = deleteReference;
        this.length--;
    }


    _iterateUntilIndex(index) {
        let currentNode = this.head;
        let counter = 0;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }

        return currentNode;
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.insert(75, 35);
myLinkedList.insert(0, 8);
myLinkedList.insert(3, 600);
myLinkedList.deleteNode(2)
myLinkedList.printList();
console.log(myLinkedList)