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

let dfsVLR = (node) => {
    if (!node) return
    console.log(node.name)
    dfsVLR(node.left)
    dfsVLR(node.right)
}

let dfsLVR = (node) => {
    if (!node) return
    dfsLVR(node.left)
    console.log(node.name)
    dfsLVR(node.right)
}

let dfsLRV = (node) => {
    if (!node) return
    dfsLRV(node.left)
    dfsLRV(node.right)
    console.log(node.name)
}

dfsVLR(tree)
console.log('------------------')
dfsLVR(tree)
console.log('------------------')
dfsLRV(tree)