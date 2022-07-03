class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const node = new Node(value)
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value) {
        const prependedNode = new Node(value);
        prependedNode.next = this.head;
        this.head.prev = prependedNode;
        this.head = prependedNode;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value);

        const nodeToInsert = new Node(value);
        const leader = this._iterateUntilIndex(index - 1);
        const follower = leader.next;

        nodeToInsert.prev = leader;
        nodeToInsert.next = follower;
        leader.next = nodeToInsert;
        follower.prev = nodeToInsert;
        this.length++;
    }

    deleteNode(index) {
        if (index >= this.length) index = this.length - 1;

        const leader = this._iterateUntilIndex(index - 1);
        const deleteReference = leader.next.next;
        deleteReference.prev = leader;
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

    printList() {
        const array = [];
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(16);
// myLinkedList.append(1);
myLinkedList.prepend(9);
// myLinkedList.insert(75, 35);
// myLinkedList.insert(0, 8);
myLinkedList.insert(1, 600);
myLinkedList.deleteNode(1)
// myLinkedList.printList();
console.log(myLinkedList)