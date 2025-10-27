import { exec } from 'child_process';
import pngquant from 'pngquant-bin';

// mac npm install pngquant-bin execa 
// exec(`"${pngquant}" --version`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing pngquant: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`pngquant stderr: ${stderr}`);
//     return;
//   }
//   console.log(`pngquant version: ${stdout}`);
// });
// 压缩图片
// --speed=1: 最慢的速度，产生最高质量的输出图像。
// --speed=10: 最快的速度，但可能导致输出图像质量稍微降低。
// quality表示图片质量0-100值越大图片越大效果越好
const comd = `"${pngquant}" --quality=65-80 --speed 1 -o output.png 73kb.png`;
exec(comd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing pngquant command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`pngquant command stderr: ${stderr}`);
    return;
  }
  console.log(`pngquant command stdout: ${stdout}`);
});