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
            
            for(let i = 0; i < this.size - 2; i++){
                prev = prev.next
            }
            element = prev.next;
            prev.next = element.next;

            this.size--
            return element.value
        }
    }

    tail() {
        if(this.isEmpty()) {
            return null
        }
        if(!this.head.next) {
            return this.head;
        }
        let prev = this.head;
        let element
        while(prev.next) {
            prev = prev.next
        }
        element = prev;
        return element.value
    }

    contains(value) {
        if(this.isEmpty()) {
            return false;
        }
        if(this.head === value) {
            return true
        }
        let prev = this.head;
        while(prev && prev.next.value !== value) {
            prev = prev.next;
        }
        if(prev.next.value === value) {
            return true
        } else {
            return false
        }
        } 

        find(value) {
            if(this.isEmpty()) {
                return null;
            }
            if(this.head.value === value) {
                return 0;
            }
            let prev = this.head;
            let i = 1;
            while(prev && prev.next.value !== value) {
                prev = prev.next
                i++
            }

            if(prev.next.value === value) {
                return i;
            } else {
                return null;
            }
        }

        toString() {
            if (!this.head) return "null";
            
            let result = "";
            let current = this.head;
            
            while (current) {
                result += `( ${current.value} ) -> `;
                current = current.next;
            }
            
            return result + "null";
        }

        at(index) {
            if(this.size < 0 || index > this.size) {
                return 'not found'
            }

            let prev = this.head
            for(let j = 0; j < index; j++) {
                prev = prev.next
            }
            let element = prev
            return element.value
        }

        inserts(value, index) {
            if(index < 0 || index > this.size)
            if (index === 0) {
                this.prepend(value)
            }

            const node = new Node(value);
            if(!this.head) {
                this.head = node
            }

            let prev = this.head
            for(let j = 0; j < index - 1; j++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

        removeAt(index) {
            if(index < 0 || this.size < index) {
                return
            }
            let removed
            if(index === 0) {
                this.head = this.head.next;
                removed = this.head
                return removed.value;
            }
            let prev = this.head
            for(let j=0; j < index - 1; j++) {
                prev = prev.next
            }
            removed = prev.next;
            prev.next = prev.next.next
            this.size--

            return removed.value
        }


}

const list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());
list.append('dog');
list.append('cat');
list.append('goat');
list.prepend('cow');
list.prepend('camel');
list.inserts('pig', 3)
list.print();
console.log(list.at(2))
console.log(list.removeAt(3))
console.log(list.toString());
