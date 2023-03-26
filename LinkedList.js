class LinkedList {
    constructor() {
        // Initialize an empty linked list
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value, null);
        if (!this.head) {
            // If the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the end of the list
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Increase the length of the list by 1
        this.length++;
    }

    // Add a node to the beginning of the list
    prepend(value) {
        const newHead = new Node(value, this.head);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead
        } else {
            newHead.next = this.head;
            this.head = newHead;

        }
        
        
        this.length++;
    }

    // Return the length of the list
    size() {
        return this.length;
    }

    // Return the head node of the list
    returnHead() {
        return this.head;
    }

    // Return the tail node of the list
    returnTail() {
        return this.tail;
    }

    // Return the node at a given index in the list
    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Check if the list contains a given value
    contains(value) {
        for (let current = this.head; current; current = current.next) {
            if (current.value === value) {
                return true;
            }
        }
        return false;
    }

    // Find the index of the first node with a given value
    find(value) {
        let index = 0;
        for (let current = this.head; current; current = current.next) {
            if (current.value === value) {
                return index;
            }
            index++;
        }
        return null;
    }

    // For the format to be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(`${values.map(v => `( ${v} )`).join(' -> ')} -> null`);
    }

    // This method takes a value and an index as input and inserts a new node with the given value at the given index in the linked list.
    insertAt(value, index) {
        // If the index is out of range (less than 0 or greater than the length of the linked list), the method returns null and does not modify the list.
        if (index < 0 || index > this.length) {
            return null;
        }
        // If the index is 0, the method returns the result of calling the prepend() method with the given value, which inserts the new node at the head of the list.
        if (index === 0) {
            return this.prepend(value);
        }
        // f the index is equal to the length of the list, the method returns the result of calling the append() method with the given value, which inserts the new node at the tail of the list.
        if (index === this.length) {
            return this.append(value);
        }
        // Calculate the index to insert the new node
        const actualIndex = index < 0 ? this.length + index : index;
        // Traverse the list to the node before the index to insert the new node.
        let current = this.head;
        for (let i = 0; i < actualIndex - 1; i++) {
            current = current.next;
        }
        // Create a new node with the given value and insert it to the list
        const node = new Node(value, current.next);
        current.next = node;
        this.length++;
    }

    // This function removes the node at the given index from a linked list.
    removeAt(index) {
        // Checks is the index is within the range of the linked list
        if (index < 0 || index >= this.length) {
            return null;
        }
        // Set the current node to the head of the linked list
        let current = this.head;
        // If the index is 0, update the head to the next node of the list.
        if (index === 0) {
            this.head = current.next;
        } else {
            // If the index is not 0, traverse the linked list until the index is rearched.
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            // Update the previous node's pointer to skip over the node being removed.
            prev.next = current.next;
        }
        // Decrement the length of the linked list.
        this.length--;
    }

    // This function removes the last node from a linked list
    pop() {
        // Check if the linked list is empty (no head node)
        if (!this.head) {
            return null;
        }
        // Set the current node to the head of the linked list initialize a previous node to null.
        let current = this.head;
        let prev = null;
        //Traverse the linked list until the last node is reached (current.next is null).
        while (current.next) {
            prev = current;
            current = current.next;
        }
        // if the previous node, update its next pointer to null and set the tail to the previous node.
        if (prev) {
            prev.next = null;
            this.tail = prev;
        } else {
            this.head = null;
            this.tail = null;
        }
        // Decrement the length of the linked list.
        this.length--;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

LinkedList.fromValues = function (...value) {
    const list = new LinkedList();
    for (let i = value.length - 1; i >= 0; i--) {
        list.prepend(value[i])
    }
    return list;
}

module.exports = LinkedList