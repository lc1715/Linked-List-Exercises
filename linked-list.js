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

  // let lst = new LinkedList([5, 10]); 
  //numsList = {head: {val:2, next:{val:3, next:null}}, tail: {val:3, next:null}, length: 0 }

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
    const newNode = new Node(val)  //{val:3, next: null} //{val:4, next: null}
    if (this.head === null) {
      this.head = newNode; //numsList = {head: {val:2, next: null}, tail: null, length: 0}
    } else {
      newNode.next = this.head //{val:4, next: {val:3, next: {val:2, next: null}, tail: null, length: 0}}}
      this.head = newNode //{head: {val:4, next: {val:3, next: {val:2, next: null}, tail: null, length: 0}}}
    }
    if (this.length === 0) {
      this.tail = this.head //numsList = {head:{val:2, next:null}, tail:{val:2, next:null}, length: 0}
    }
    this.length += 1
  }

  // const numsList2 = new LinkedList()
  // numsList2.unshift(2)
  // numsList2.unshift(3)
  // numsList2.unshift(4)

  // /** Node: node for a singly linked list. */
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // // newNode = {val: val, next: null}

  // /** LinkedList: chained together nodes. */
  // class LinkedList {
  //   constructor(vals = []) {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;

  //     for (let val of vals) this.push(val);
  //   }
  //   numsList = { head: null, tail: null, length: 0 }

  // let numsList = new LinkedList([2, 3]); 
  //numsList = {head: {val:2, next:{val:3, next:null}}, tail: {val:3, next:null}, length: 0 }

  /** pop(): return & remove last item. */ //Remove & return tail value. Throws error if list is empty.
  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentNode = this.head;  // currentNode = {val:2, next:{val:3, next:null}}
    let newTail = currentNode;    // newTail = {val:2, next:{val:3, next:null}}

    while (currentNode.next) {
      newTail = currentNode;
      //newTail = {val:2, next:{val:3, next:{val:4, next:null}}}, {val:3, next:{val:4, next:null}, {val:4, next:null}
      console.log(newTail)
      currentNode = currentNode.next;  // {val:3, next:{val:4, next:null}, {val:4, next:null}
    }

    this.tail = newTail;  // {val:3, next:null} becasue with {val:4, next:null}, next is equal to null
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      console.log('this.tail=', this.tail)
      return this.tail
    }

    console.log('this.tail.val=', this.tail.val)
    return this.tail.val
    // return currentNode;
    // // let numsList3 = new LinkedList([2, 3])
    // // // numsList3 = {head: {val:2, next:{val:3, next:null}}, tail: {val:3, next:null}, length: 2 }
    // let currentNode = this.head
    // //currentNode = {val:2, next:{val:3, next:null}       

    // while (currentNode) {
    //   // console.log(currentNode.val)
    //   let lengthofnode = this.length
    //   if (currentNode.next === null) {
    //     // console.log('node val when next is null', currentNode.val)
    //     delete currentNode.val
    //     delete currentNode.next

    //     this.length -= 1
    //     // let tail = this.tail.val = this.length + 1
    //     // console.log('tail is', tail)
    //     // console.log('length is', this.length)
    //   }
    //   currentNode = currentNode.next
    //   // console.log('currentNode is', currentNode)

    // }
    // // currentNode = this.head.next
    // // this.tail.val = currentNode
    // // console.log('tail is equal to', tail)
    // // return this.tail.val
  }

}
let numsList3 = new LinkedList([2, 3])
// numsList3 = {head: {val:2, next:{val:3, next:null}}, tail: {val:3, next:null}, length: 0 }
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
