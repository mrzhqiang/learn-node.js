let {spawn} = require('child_process');

let bat = spawn('cmd.exe', ['/d/1mrzhqiang/learn-node.js', './my.bat']);

bat.stdout.on('data', (data) => {
    console.log(`${new Date().toISOString()}: ${data.toString()}`);
});

bat.stderr.on('data', (data) => {
    console.error(`${new Date().toISOString()}: ${data.toString()}`);
});

bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
});
