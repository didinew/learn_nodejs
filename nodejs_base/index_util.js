import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

execPromise('ls -la').then(({ stdout, stderr }) => {
    if (stderr) {
        console.error(`Error: ${stderr}`);
    }
    console.log(`Output:\n${stdout}`);
}).catch(err => {
    console.error(`Execution failed: ${err}`);
});