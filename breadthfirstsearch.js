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

let tree = {
    name: 'A',
    left: {
        name: 'B',
        left: {
            name: 'C',
            left: {
                name: 'D'
            },
            right: {
                name: 'E'
            }
        },
        right: {
            name: 'F',
            left: {
                name: 'G'
            },
            right: {
                name: 'H'
            }
        }
    },
    right: {
        name: 'I',
        left: {
            name: 'J',
            left: {
                name: 'K'
            },
            right: {
                name: 'L'
            }
        },
        right: {
            name: 'M',
            left: {
                name: 'N'
            },
            right: {
                name: 'O'
            }
        }
    }
}

let bfs = (tree) => {
    let q = new Queue()

    q.enqueue(tree)
    
    let node = q.dequeue()
    while (node) {
        console.log(node.name)
        q.enqueue(node.left)
        q.enqueue(node.right)

        node = q.dequeue()
    }
}

bfs(tree)
