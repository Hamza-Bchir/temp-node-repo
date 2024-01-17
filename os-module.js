const os = require('os');

const user = os.userInfo();
const networkInterface= os.networkInterfaces();
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);
console.log(networkInterface);