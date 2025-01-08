const mul = (a, b) => a * b;

module.exports = {
    mul,
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
}

const sub = (a, b) => a - b;   // This function is not exported

module.exports.sub = sub;

