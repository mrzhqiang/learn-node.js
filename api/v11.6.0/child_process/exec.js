let {exec} = require('child_process');

exec('my.bat', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

let bat = spawn('"my script.cmd"', ['a', 'b'], {shell: true});
exec('"my script.cmd" a b', (err, stdout, stderr) => {
    // ...
});
