//node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //check if empty
    isEmpty() {
        return this.size === 0;
    }

    //append
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node;
            
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            
        } else {
            
            node.next = this.head;
            this.head = node;
        }
        this.size++
        
    }

    //check the size
    getSize() {
        return this.size;
    }

    //get the head
    getHead() {
        if(this.head) {
            return this.head.value;
        }
        return null;
        
    }

    print() {

        if(this.isEmpty()) {
           console.log('list is empty')
        } else {
            let prev = this.head
            let lists = '';
            while(prev) {
                lists += `${prev.value} `
                prev = prev.next;
            }
             console.log(lists);
        }
        
    }

    pop() {
        if(this.isEmpty()) {
            return null
        } else {
            let element;
            let prev = this.head;
            while(prev.next) {
                prev = prev.next
            }
            element = prev.value;
            this.size--
            return element
        }
    }
}

const list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());
list.append('dog');
list.append('cat');
list.append('goat');
list.prepend('cow');
list.prepend('camel')
console.log(list.pop());
console.log(list.getSize());
console.log(list.isEmpty());
list.print();
console.log(list.getHead());