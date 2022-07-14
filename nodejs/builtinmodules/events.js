const EventEmitter = require('node:events');
const log = console.log;

const eventEmitter = new EventEmitter();

eventEmitter.on('test', ()=> {
    log(new Date().toLocaleString()) ;
});

eventEmitter.emit('test');

log('======= conditional event emitter ==================')

eventEmitter.on('even', (t)=> {
    log('EVEN : ', t, new Date().toLocaleString());
});

eventEmitter.on('odd', (t)=> {
    log('ODD : ', t, new Date().toLocaleString());
});

setInterval(() => {
    const t = new Date().getTime();
    t%2 === 0 ? eventEmitter.emit('even', t) : eventEmitter.emit('odd', t);
}, 1751);
