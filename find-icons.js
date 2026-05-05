const si = require('simple-icons');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('aws') || k.toLowerCase().includes('amazon') || k.toLowerCase().includes('azure') || k.toLowerCase().includes('microsoft')));
