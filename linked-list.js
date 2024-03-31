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

    for (let val of vals) {
      this.push(val);
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode

    }
    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }


  /** pop(): return & remove last item. */

  pop() {
    if (this.head.next == null) {
      let val = this.head.val
      this.head = null
      this.tail = null
      this.length -= 1
      return this.returnNodeValue(val)
    }

    let firstNode = this.head
    let currentNode = this.head

    while (currentNode.next.next != null) {
      currentNode = currentNode.next
    }

    let val = currentNode.next.val

    currentNode.next = null
    this.tail = currentNode
    this.head = firstNode

    this.length -= 1

    return this.returnNodeValue(val)
  }

  /** shift(): return & remove first item. */

  shift() {
    let val = this.head.val

    this.head = this.head.next
    this.length -= 1

    if (this.head == null) {
      this.tail = null
    }
    return this.returnNodeValue(val)
  }


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let val = null

    if (idx == 0) {
      return this.returnNodeValue(this.head.val)
    }
    else {
      if (idx < this.length) {
        for (let i = 1; i <= idx; i++) {
          let currentNode = this.head
          this.head = currentNode.next
          val = this.head.val
        }
      }
    }
    return this.returnNodeValue(val)
  }

  returnNodeValue(val) {
    return val
  }


  /** setAt(idx, val): set the val at this idx to be the variable, val */

  setAt(idx, val) {
    let firstHead = this.head
    let currentNode = this.head

    if (idx == 0) {
      currentNode.val = val
      this.head = firstHead
      return this.returnNodeValue(currentNode.val)
    }
    else {
      if (idx < this.length) {
        for (let i = 1; i <= idx; i++) {
          currentNode = currentNode.next
          if (i == idx) {
            currentNode.val = val
            this.head = firstHead
            return this.returnNodeValue(currentNode.val)
          }

        }
      }
    }
  }

  /** insertAt(idx, val): add a new node with val as the variable, val, before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val)

    let firstHead = this.head
    let currentNode = this.head

    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
      this.length += 1
      return this.returnNodeValue(this.head.val)
    }

    if (idx == 0) {
      this.head = newNode
      this.head.next = firstHead

      this.length += 1
      return this.returnNodeValue(currentNode.val)
    }
    else {
      if (idx < this.length) {

        for (let i = 0; i <= idx; i++) {
          if (i == idx - 1) {
            let restOfList = currentNode.next
            currentNode.next = newNode
            newNode.next = restOfList

            this.length += 1
            return this.returnNodeValue(newNode.val)
          }
          else {
            currentNode = currentNode.next
          }
        }
      }
    }
    if (idx == this.length) {
      this.tail.next = newNode
      this.tail = newNode

      this.length += 1
      return this.returnNodeValue(newNode.val)
    }
  }



  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {

    let restOfList = null
    let firstHead = this.head
    let currentNode = this.head

    if (idx == 0) {
      currentNode = currentNode.next
      this.head = null
      this.tail = null

      this.length -= 1
      return this.returnNodeValue(currentNode.val)
    }

    if (idx == this.length - 1) {
      this.pop()
      return this.returnNodeValue(this.head)
    }


    if (idx < this.length) {

      for (let i = 1; i <= idx; i++) {
        if (i == idx) {
          currentNode = currentNode.next
          restOfList = currentNode.next
        }
        else {
          currentNode = currentNode.next
        }
      }

      if (idx == 1) {
        this.head = firstHead
        this.head.next = restOfList

        this.length -= 1
        return this.returnNodeValue(this.head.val)
      }

      for (let i = 1; i <= idx; i++) {
        if (i == idx) {
          currentNode.next = restOfList

          this.length -= 1
          return this.returnNodeValue(currentNode.val)
        }
        else {
          currentNode = firstHead
          currentNode = currentNode.next
        }
      }
    }

  }



  /** average(): return an average of all values in the list */

  average() {
    let count = 0
    let totalValue = 0
    let currentNode = this.head

    if (this.length == 0) {
      return 0
    }

    while (currentNode) {
      count += 1
      totalValue += currentNode.val
      currentNode = currentNode.next
    }
    return totalValue / count
  }

}

