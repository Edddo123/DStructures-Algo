//Data structure is just wau of organizing data so that we can access and edit them optimally, considering runtime complexity
/*adding sth to the queue - Enqueuing/adding; removing sth from a queue - Dequeuing/removing 
It follows fifo principle, so first record that gets added to the queue also get removed first, like if we add A and then B to queue and we issue remove command, A is going to be removed from queue first. Its like what real perfect queue would look like
So basically in js setting queue is just like array but it only has unshift and pop method, so we can make new class and restrict array methods to make it into queue, like have add and remove methods for unshift and pop
*/

class Queue {
    constructor() {
        this.data = []
    }
    add(record) {
        this.data.unshift(record)
    }
    remove() {
        return this.data.pop()
    }
}

const newQ = new Queue
newQ.add(3)
newQ.remove()
console.log(newQ.data)