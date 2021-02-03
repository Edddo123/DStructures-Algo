const Stack = require("../stack/index");

class Queue {
    constructor() {
      this.s1 = new Stack();
      this.s2 = new Stack();
    }
    add(value) {
      this.s1.push(value);
    }
    peek() {
      while (this.s1.peek()) {
        this.s2.push(this.s1.pop());
      }
      const record = this.s2.peek();
      while (this.s2.peek()) {
        this.s1.push(this.s2.pop());
      }
      return record;
    }
    remove() {
      while (this.s1.peek()) {
        this.s2.push(this.s1.pop());
      }
      const record = this.s2.pop();
      while (this.s2.peek()) {
        this.s1.push(this.s2.pop());
      }
      return record;
    }
  }

