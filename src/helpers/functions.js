function existsAndHasValue(key, value) {
    if (!(key[value]) || typeof (key[value]) == 'undefined' || key[value] == null || key[value] == ' ' || key[value] == '') {
        return false;
    }
    return true;
}

function generatePassword() {
    return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}

function verifyBalance(balance, value) {
    return (balance - value < 0) ? false : true;
}

module.exports = {
    existsAndHasValue,
    generatePassword,
    verifyBalance
}