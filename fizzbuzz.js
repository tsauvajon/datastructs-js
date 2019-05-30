let defaultChecks = [
    {
        nb: 3,
        msg: 'Fizz'
    },
    {
        nb: 5,
        msg: 'Buzz'
    }
]

let fizzbuzz = (n, checks) => {
	let getStr = (i, checks) => {
        let found = false
        let str = ''

        checks.forEach((c) => {
            if (i%c.nb === 0) {
                found = true
                str = `${str}${c.msg}`
            }
        })

        return found ? str : `${i}`
    }

    return new Array(n).fill(undefined).map((_, i) => getStr(i+1, checks))
}

let printFb = (n = 100, checks = defaultChecks) => fizzbuzz(n, checks).forEach(str => console.log(str))

printFb()
