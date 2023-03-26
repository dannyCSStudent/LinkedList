const LinkedList = require('./LinkedList');

describe('#append(value)', () => {
    test('Adds a new node containing value to the end of the list', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);

        
        expect(list.head.value).toBe(15);
        expect(list.tail.value).toBe(20);
        expect(list.length).toBe(2);
    })
})

describe('#prepend(value)', () => {
    test('Adds a new node containing value to the start of the list', () => {
        const list = new LinkedList();
        list.prepend(10);
        const oldHead = list.head
        list.prepend(20);

        expect(list.head.value).toBe(20);
        expect(list.head.next).toBe(oldHead);
        expect(list.length).toBe(2);
    })
})

describe('#size()', () => {
    test('Returns the total number of nodes in the list', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);
        
        expect(list.size()).toBe(3)
    })
})

describe('#returnHead()', () => {
    test('Returns the first node in the list', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);

        expect(list.returnHead().value).toBe(15);
        expect(list.size()).toBe(3);

    })
})

describe('#returnTail()', () => {
    test('Returns the last node in the list', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);

        expect(list.returnTail().value).toBe(30);
        expect(list.size()).toBe(3);

    })
})

describe('#at(index)', () => {
    test('Returns the node at given index', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);

        expect(list.at(2).value).toBe(30);
        expect(list.size()).toBe(3);
    })
})

describe('#pop()', () => {
    test('Removes the last element from the list', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);
        list.pop();

        expect(list.size()).toBe(2);

    })
})

describe('#contains(value)', () => {
    test('Returns true if the passed in value is in the list and otherwise returns false', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);

        expect(list.contains(20)).toBeTruthy();
        expect(list.contains(90)).toBeFalsy();
    })
})

describe('#find(value)', () => {
    test('Returns the index of the node containing value, or null if not found', () => {
        const list = new LinkedList();
        list.append(15);
        list.append(20);
        list.append(30);

        expect(list.find(30)).toBe(2);
        expect(list.find(40)).toBeNull();
    })
})

describe('#insertAt(value, index)', () => {
    describe('with index less than 0', () => {
        test('will not insert anything', () => {

            const list = new LinkedList();
            list.append(15);
            list.append(20);

            expect(list.insertAt(30, - 1)).toBeNull();
            expect(list.length).toBe(2);
        })
        

    })
    describe('with index greater than list length', () => {
        test('will not insert anything', () => {

            const list = new LinkedList();
            list.append(15);
            list.append(20);

            expect(list.insertAt(35, 10)).toBeNull();
            expect(list.length).toBe(2);
        })
        
    })
    describe('with index 0', () => {
        test('should insert at head', () => {

            const list = new LinkedList();
            list.append(10);
            list.append(20);
            list.insertAt(30, 0);
            

            expect(list.head.value).toBe(30);
            expect(list.head.next.value).toBe(10);
            expect(list.length).toBe(3);
        })
    })
        
    describe('with index in the middle', () => {
        test('Inserts a new node with the provided value at the given index', () => {

            const list = new LinkedList();
            list.append(10);
            list.append(20);
            list.insertAt(30, 1);
            

            expect(list.head.value).toBe(10);
            expect(list.head.next.value).toBe(30);
            expect(list.length).toBe(3);
        })
        
    })
})

describe('#removeAt(index)', () => {
    describe('with index less than 0', () => {
        test('removes nothing', () => {
            const list = new LinkedList();
            list.append(15);
            list.append(20);

            expect(list.removeAt(- 1)).toBeNull();
            expect(list.length).toBe(2);
        })
    })
    describe('with index greater than list length', () => {
        test('remove nothing', () => {
            const list = new LinkedList();
            list.append(15);
            list.append(20);

            expect(list.removeAt(3)).toBeNull();
            expect(list.length).toBe(2);
        })
    })
    describe('with index 0', () => {
        test('remove the head', () => {
            const list = new LinkedList();
            list.append(15);
            list.append(20);
            list.append(30);
            list.removeAt(0);

            expect(list.head.value).toBe(20);
            expect(list.head.next.value).toBe(30);
            expect(list.length).toBe(2);
        })
    })
    describe('with index in the middle', () => {
        test('removes the node at the given index', () => {
            const list = new LinkedList();
            list.append(15);
            list.append(20);
            list.append(30);
            list.append(40);
            const node = list.at(1);
            list.removeAt(2);
            

            expect(node.value).toBe(20);
            expect(node.next.value).toBe(40);
            expect(list.length).toBe(3);
        })

    })

})





