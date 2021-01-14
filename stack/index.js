class Stack {
    constructor() {
      this.data = [];
    }
    push(value) {
      this.data.unshift(value);
    }
    pop() {
      return this.data.shift();
    }
    peek() {
      return this.data[0];
    }
  }

//same as queue but we also remove the last added item, so add to start and remove from start