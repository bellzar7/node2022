const fs = require('fs').promises;

fs.appendFile('./file.txt', 'Hello ept \n').then(() => {
    console.log('done');
}).catch(e => {
    console.log(e);
})