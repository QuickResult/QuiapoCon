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
    document.getElementById('binary').value = decimalValue.toString(2);
    document.getElementById('octal').value = decimalValue.toString(8);
    document.getElementById('hexadecimal').value = decimalValue.toString(16).toUpperCase();
}

function convertFromBinary() {
    const binary = document.getElementById('binary').value.trim();
    if (binary === '') {
        clearAllInputs();
        return;
    }
    const binaryValue = parseInt(binary, 2);
    if (isNaN(binaryValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('decimal').value = binaryValue.toString(10);
    document.getElementById('octal').value = binaryValue.toString(8);
    document.getElementById('hexadecimal').value = binaryValue.toString(16).toUpperCase();
}

function convertFromOctal() {
    const octal = document.getElementById('octal').value.trim();
    if (octal === '') {
        clearAllInputs();
        return;
    }
    const octalValue = parseInt(octal, 8);
    if (isNaN(octalValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('decimal').value = octalValue.toString(10);
    document.getElementById('binary').value = octalValue.toString(2);
    document.getElementById('hexadecimal').value = octalValue.toString(16).toUpperCase();
}

function convertFromHexadecimal() {
    const hexadecimal = document.getElementById('hexadecimal').value.trim();
    if (hexadecimal === '') {
        clearAllInputs();
        return;
    }
    const hexValue = parseInt(hexadecimal, 16);
    if (isNaN(hexValue)) {
        clearAllInputs();
        return;
    }
    document.getElementById('decimal').value = hexValue.toString(10);
    document.getElementById('binary').value = hexValue.toString(2);
    document.getElementById('octal').value = hexValue.toString(8);
}

function clearAllInputs() {
    document.getElementById('decimal').value = '';
    document.getElementById('binary').value = '';
    document.getElementById('octal').value = '';
    document.getElementById('hexadecimal').value = '';
}
