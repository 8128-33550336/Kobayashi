const fs = require('fs');
const logo = fs.readFileSync('./logo.txt', 'utf-8').split('');
const jsf = fs.readFileSync('./jsfuck.js', 'utf-8').split('');
let result = '';
let count = 0;

while (jsf.length) {
    result += count >= logo.length || logo[count] === '*' ? jsf.shift() : logo[count];
    count++;
}

fs.writeFileSync('./build.js', result);