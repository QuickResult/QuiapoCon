function convertFromDecimal() {
    const decimal = document.getElementById('decimal').value.trim();
    if (decimal === '') {
        clearAllInputs();
        return;
    }
    const decimalValue = parseInt(decimal, 10);
    if (isNaN(decimalValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('binary').value = decimalToBinary(decimalValue);
    document.getElementById('octal').value = decimalToOctal(decimalValue);
    document.getElementById('hexadecimal').value = decimalToHex(decimalValue);
}

function convertFromBinary() {
    const binary = document.getElementById('binary').value.trim();
    if (binary === '') {
        clearAllInputs();
        return;
    }
    const binaryValue = binaryToDecimal(binary);
    if (isNaN(binaryValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('decimal').value = binaryValue;
    document.getElementById('octal').value = decimalToOctal(binaryValue);
    document.getElementById('hexadecimal').value = decimalToHex(binaryValue);
}

function convertFromOctal() {
    const octal = document.getElementById('octal').value.trim();
    if (octal === '') {
        clearAllInputs();
        return;
    }
    const octalValue = octalToDecimal(octal);
    if (isNaN(octalValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('decimal').value = octalValue;
    document.getElementById('binary').value = decimalToBinary(octalValue);
    document.getElementById('hexadecimal').value = decimalToHex(octalValue);
}

function convertFromHexadecimal() {
    const hexadecimal = document.getElementById('hexadecimal').value.trim();
    if (hexadecimal === '') {
        clearAllInputs();
        return;
    }
    const hexValue = hexToDecimal(hexadecimal);
    if (isNaN(hexValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('decimal').value = hexValue;
    document.getElementById('binary').value = decimalToBinary(hexValue);
    document.getElementById('octal').value = decimalToOctal(hexValue);
}

function clearAllInputs() {
    document.getElementById('decimal').value = '';
    document.getElementById('binary').value = '';
    document.getElementById('octal').value = '';
    document.getElementById('hexadecimal').value = '';
}

function decimalToBinary(decimal) {
    let result = '';
    while (decimal > 0) {
        result = (decimal % 2) + result;
        decimal = Math.floor(decimal / 2);
    }
    return result || '0';
}

function decimalToHex(decimal) {
    const hexChars = '0123456789ABCDEF';
    let result = '';
    while (decimal > 0) {
        result = hexChars[decimal % 16] + result;
        decimal = Math.floor(decimal / 16);
    }
    return result || '0';
}

function decimalToOctal(decimal) {
    let result = '';
    while (decimal > 0) {
        result = (decimal % 8) + result;
        decimal = Math.floor(decimal / 8);
    }
    return result || '0';
}

function binaryToDecimal(binary) {
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
        result = result * 2 + parseInt(binary[i], 10);
    }
    return result;
}

function hexToDecimal(hex) {
    const hexChars = '0123456789ABCDEF';
    let result = 0;
    for (let i = 0; i < hex.length; i++) {
        result = result * 16 + hexChars.indexOf(hex[i].toUpperCase());
    }
    return result;
}

function octalToDecimal(octal) {
    let result = 0;
    for (let i = 0; i < octal.length; i++) {
        result = result * 8 + parseInt(octal[i], 10);
    }
    return result;
}
