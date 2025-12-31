//node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//linked list class
class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //check if empty
    

    //append
    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        let prev = this.head;
        while(prev.next) {
            prev = prev.next;
        }
        prev.next = newNode;
        this.tail = newNode;
        this.length++;
        
    }

    prepend(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } 

            newNode.next = this.head;
            this.head = newNode;
        

        this.length++;
    
    }

    //check the size
    getSize() {
        return this.length;
    }

    //get the head
    getHead() {
        if(this.head) {
            return this.head.value;
        }
        return null;
        
    }

    print() {

        if(!this.head) {
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
       if(!this.head) return null;
       let temp = this.head;
       let prev = null;
       while(temp.next) {
        prev = temp;
        temp = temp.next;
       }
       prev.next = null;
       this.tail = prev;
       this.length--
       if(this.length === 0) {
        this.head = null;
        this.tail = null;
       }

       return temp.value;
    }

    shift() {
        if(!this.head) return undefined;
        let prev = this.head;
        this.head = this.head.next;
        prev.next = null

        return prev.value;
    }

    tail() {
        if(!this.head) return undefined;

        return this.tail;
        
    }

    contains(value) {
        
        if(!this.head) return false;
        let prev = this.head;
        while(prev !== null) {
            if(prev.value === value) return true;
            prev = prev.next;
        }
        return false;
        } 

        find(value) {
            if(!this.head) return null;
            let prev = this.head;
            let index = 0;
            while(prev) {
                if(prev.value === value) {
                    return index;
                }
                index++;
                prev = prev.next;
            }
            return 'not found';
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
            if(!this.head) return null;
            if(index < 0 || index >= this.length) return null;
            let prev = this.head;
            for(let i = 0; i < index; i++) {
                prev = prev.next;
            }
            return prev;
        }

        inserts(value, index) {
            if(index === 0) return this.prepend(value);
            if(index === this.length) return this.append(value);
            if(index < 0 || index > this.length) return null;

            
                const newNode = new Node(value);

                let before =this.at(index - 1)
                newNode.next = before.next;
                before.next = newNode;
            
            }

            


            
        

        removeAt(index) {
            if(index === 0) return this.shift();
            if(index === this.length) return this.pop();
            if(index < 0 || index > this.length) return null;

            let before = this.at(index - 1);
            let temp = before.next;
            before.next = before.next.next;

            return temp;
        }


}

const list = new LinkedList('gorrila');

list.append('dog');
list.append('cat');
list.append('goat');
list.prepend('cow');
list.prepend('camel');
console.log(list.getHead())
console.log(list.pop());
console.log(list.find('dog'))
console.log(list.shift());

list.inserts('pig', 0)
list.print();
console.log(list.contains('dog'));

console.log(list.at(2))
//console.log(list.removeAt(3))
list.print();
console.log(list.toString());
