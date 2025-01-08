const mul = (a, b) => a * b;

module.exports = {
    mul,
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
}

const add = (a, b) => a + b;    

module.exports = {
    add,
    mul,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
}