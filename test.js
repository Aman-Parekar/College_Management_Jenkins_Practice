const assert = require('assert');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
assert(html.includes('College Management System'), 'Page title missing');
assert(html.includes('Student Records'), 'Student section missing');
console.log('PASS: College Management page checks');
