const SamsungRemote = require('samsung-remote');
const remote = new SamsungRemote({
    ip: '192.168.0.115' // required: IP address of your Samsung Smart TV
});

// check if TV is alive (ping)
remote.isAlive((err) => {
    if (err) {
        throw new Error('TV is offline');
    } else {
        console.log('TV is ALIVE!');
    }
});

// remote.send('KEY_POWEROFF', (err) => {
    remote.send('KEY_POWERON', (err) => {
        if (err) {
        throw new Error(err);
    } else {
        // command has been successfully transmitted to your tv
    }
});
