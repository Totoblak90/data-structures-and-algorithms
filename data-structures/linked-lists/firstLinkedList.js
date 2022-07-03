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

    reverse() {
        if (!this.head.next) {
            return this.head
        }

        let first = this.head;
        // console.log('creo first que es igual a head: ', first);

        this.tail = this.head;
        // console.log('cambio tail por head: ', this.tail)

        let second = this.head.next;
        // console.log('creo second que es igual a lo que hay en el next de this.head: ', second);

        // console.log('ENTRO AL WHILE')

        while (second) {
            const third = second.next;
            // console.log('creo third que es igual a lo que hay en next de second: ', third);

            second.next = first;
            // console.log('cambio next en second y lo igualo a lo que hay en first: ', second.next)

            first = second;
            // console.log('cambio first y le asigno el valor de second: ', first)

            second = third;
            // console.log('cambio second y le asigno el valor de third: ', second)

        }

        // console.log('SALGO DEL WHILE')
        this.head.next = null;
        // console.log('cambio el next de head por null', this.head)

        this.head = first;
        // console.log('Hago que head sea first', this.head)

        // return this.head;
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
        console.log(array);
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
myLinkedList.reverse();
console.log(myLinkedList)