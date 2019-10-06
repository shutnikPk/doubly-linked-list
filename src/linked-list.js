const Node = require('./node');

class LinkedList {
    constructor() {
        // let node = new Node(head,tail,length)
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {

        
        let node = new Node(data);
        if (this._head == this._tail && this._tail == null) {
            this._head = node;
            this._tail = node;
            this.length++;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
            this.length++;

        }
        return this;
    }

    head() {
        if (this._head == null) {
            return null
        } else
            return this._head.data;
    }

    tail() {
        if (this._tail == null) {
            return null
        } else
            return this._tail.data;

    }

    at(index) {

        let x = this._head;

        for (let i = 0; i != index; i++) {

            x = x.next;

        }

        return x.data;
    }

    insertAt(index, data) {
if (this._head == null) {
    this.append(data);
    return this;
} else {
    
        let node = new Node(data);

        let x = this._head;
        for (let i = 0; i < index; i++) {
            x = x.next;
        }
        this.length++;
        node.prev = x.prev;
        node.next = x;
        x.prev.next = node;
        x.prev = node;
        return this;



    }}

    isEmpty() {
        //if (this.length == 0) { return true }else { return false }
        if (this._head == this._tail && this._tail == null) {
            return true
        } else {
            return false
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;

    }

    deleteAt(index) {
        if (index == 0) {
            if (this.length == 1) {
                this.clear();
                return this;
            }
            this._head = this._head.next;
            this._head.prev = null;
            return this;
        }
        let x = this._head;
        for (let i = 0; i < index; i++) {
            x = x.next;
        }
        x.prev.next = x.next;
        x.next.prev = x.prev;
        return this;
    }

    reverse() {
        //if (this.length=1){return this}

        let y;
        y = this._head;
        this._head = this._tail;
        this._tail = y;
        while (y != null) {
            let i;
            i = y.prev;
            y.prev = y.next;
            y.next = i;
            y = y.prev;
        }
        return this;


    }

    indexOf(data) {

        let x = this._head;
        for (let i = 0; i < this.length; i++) {
            if (x.data == data) {
                return i
            }
            x = x.next;
        }
        return -1;
    }
}

module.exports = LinkedList;