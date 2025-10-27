// 关于child_process模块的exec方法
// 创建一个文件夹 进入目录 写一个test.js文件，内容如下：
import { execFile } from 'child_process';
import { resolve } from 'path';

// exec方法用于执行一个shell命令，并且可以获取命令的输出结果
execFile((resolve(process.cwd(), 'index.sh')), (error, stdout, stderr) => {
    if (error) {
        console.error(`执行出错: ${error}`);
        return;
    }
    console.log(`标准输出:\n${stdout}`);
    console.error(`标准错误输出:\n${stderr}`);
})