module.exports = {
    sayHello: () => {
        return "hello"
    },
    addNumbers: (val1, val2) => {
        return val1 + val2
    }
}

//npm run test -s (removes err log) 
//for repeat use, change pkg, test: mocha || true