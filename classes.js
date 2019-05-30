class Queue {
    constructor() {
        this.queue = []
    }

    enqueue (val) {
        this.queue = [...this.queue, val]
    }

    dequeue () {
        if (!this.queue.length) return
        let val = this.queue[0]
        this.queue = this.queue.slice(1)
        return val
    }
}

class Heap {
    constructor() {
        this.heap = []
    }

    push (val) {
        this.heap = [val, ...this.heap]
    }

    pop () {
        if (!this.heap.length) return
        let val = this.heap[0]
        this.heap = this.heap.slice(1)
        return val
    }
}

class Tree {
    val
    left
    right

    constructor (val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

