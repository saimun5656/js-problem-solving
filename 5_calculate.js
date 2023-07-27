function calculator(n1, n2, operator) {
    if (operator === '+') {
        return n1 + n2
    }
    else if (operator === '-') {
        return n1 - n2
    }

    else if (operator === '*') {
        return n1 * n2
    }
    else if (operator === '/') {
        if (n2 === 0) {
            return 'Division by zero is not allowed'
        }
        return n1 / n2
    }
}
console.log(require('crypto').randomBytes(64).toString('hex'));
const result = calculator(15,3,'-')
console.log(result);