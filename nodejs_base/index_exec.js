import os from 'os';
import {exec} from 'child_process';
// console.log(os.platform()); // 操作系统平台, e.g., 'win32', 'darwin', 'linux'
// console.log(os.type());     //  在linux 返回 Linux, 在windows 返回 Windows_NT macOS 返回 Darwin
// console.log(os.homedir()); // 返回用户目录
// console.log(os.arch());   // 返回CPU架构, e.g., 'x64', 'arm', 'ia32'

// 根据不同平台打开默认浏览器
function openBrowser(url) {
    const platform = os.platform();
    let cmd = '';
    if (platform === 'win32') {
        cmd = `start ${url}`; 
    } else if (platform === 'darwin') {
        cmd = `open ${url}`;
    } else {
        cmd = `xdg-open ${url}`;
    }
    exec(cmd);
}

openBrowser('https://juejin.cn/post/7269014861380698169');