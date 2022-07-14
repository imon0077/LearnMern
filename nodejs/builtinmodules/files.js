const fs = require('node:fs');
const Event = require('node:events');
const event = new Event();
const log = console.log;

event.on('read', async ()=>{
    const data = await fs.promises.readFile("file1.txt", 'utf-8');
    log('reading : ', data);
});

//fs.writeFileSync("file1.txt", "Hello World!");

// fs.writeFile("file1.txt", "Hello MERN Devs!", ()=>{
//     log('inside of callback');
// });

fs.appendFile("file1.txt", 
    `\n${new Date().toLocaleString()}`, 
    ()=>{
        log('writing finished');
        event.emit('read');
    });

log('writing started');

// (async ()=> {
//     const data = await fs.promises.readFile("file1.txt", 'utf-8');
//     log('reading : ', data);
// })();