/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// newNode = {val: val, next: null}
/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val); // {val: 2, next: null}
    if (!this.head) {
      this.head = newNode;    // head = {val:2, next:null}
      this.tail = newNode;    // tail = {val:2, next:null}
      // this.tail = this.head 
    } else {
      this.tail.next = newNode; //head = {val:2, next: {val:3, next:null}} AND tail = {val:2, next: {val:3, next:null}} 
      this.tail = newNode;      //head = {val:2, next: {val:3, next:null}} AND tail = {val:3, next:null}
    }
    this.length += 1;
  }

  // Whatever we make this.tail.next equal to, then we will make this.head.next equal to the exact same thing!!!
  // Becasue this.tail.next and this.head.next both have the same reference in memory to the exact same node, 
  // (both point to the exact same newNode), then if you update this.tail.next to be equal to the new node,
  // then this.head.next will also refer to that new node, it will also become equal to that exact same node
  // becuase it's reference in memory is also referencing that exact same node.
  //numsList = {head: null, tail: null, length:0}
  //numsList = {head: Node, tail: Node, length: 0}
  //numsList = {head: {val:2, next:null}, tail: {val:2, next:null}, length: 0 }
  //this.tail.next = numsList = {head: {val:2, next:{val:3, next:null}}, tail: {val:2, next:{val:3, next:null}}, length: 0 }
  //this.tail = numsList = {head: {val:2, next:{val:3, next:null}}, tail: {val:3, next:null}, length: 0 }

  // const numsList = new LinkedList()
  // numsList.push(2)
  // numsList.push(3)
  // numsList.push(4)


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)  // newNode = {val: val, next: null}
    if (!this.head) {
      this.head = newNode;  // {val:2, next:null}
      // head = {val:2, next:null}
      // numsList = {head:{val:2, next:null}, tail:null, length: 0}
    } else {
      newNode.next = this.head;   // {val: 3, next: {val:2, next: null}}
      //newNode = {val: 3, next: {val:2, next: null}}
      this.head = newNode;  // {val: 3, next: {val:2, next: null}}
      //head = {val: 3, next: {val:2, next: null}}
      // numsList = {head:{val: 3, next: {val:2, next: null}}, tail:{val:2, next:null}, length: 1}
    }
    if (this.length === 0) {
      this.tail = this.head
      // tail = {val:2, next:null}
      // numsList = {head:{val:2, next:null}, tail:{val:2, next:null}, length: 0}
    }
    this.length += 1;
    // numsList = {head:{val:2, next:null}, tail:{val:2, next:null}, length: 1}
  }
}

const numsList2 = new LinkedList()
numsList2.unshift(2)                  //newNode = {val: 2, next: null}
numsList2.unshift(3)
numsList2.unshift(4)
//   /** pop(): return & remove last item. */

//   pop() {

//   }

//   /** shift(): return & remove first item. */

//   shift() {

//   }

//   /** getAt(idx): get val at idx. */

//   getAt(idx) {

//   }

//   /** setAt(idx, val): set val at idx to val */

//   setAt(idx, val) {

//   }

//   /** insertAt(idx, val): add node w/val before idx. */

//   insertAt(idx, val) {

//   }

//   /** removeAt(idx): return & remove item at idx, */

//   removeAt(idx) {

//   }

//   /** average(): return an average of all values in the list */

//   average() {

//   }
// }

// Not sure why I needed this line. Had to comment this line out in 
// order for Jasmine testing to work.
// module.exports = LinkedList;
