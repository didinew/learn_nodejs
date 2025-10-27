import zlib from 'zlib';
import fs from 'fs';


// 创建可读流
// const readStream = fs.createReadStream('input.txt');
// // 创建可写流 createWriteStream
// const writeStream = fs.createWriteStream('output.txt.gz');
// // 创建压缩流 createGzip
// const gzip = zlib.createGzip();

// // 管道连接：读取 -> 压缩 -> 写入
// readStream.pipe(gzip).pipe(writeStream);

// writeStream.on('finish', () => {
//     console.log('文件已压缩完成');
// });

// 解压gzip文件
const readStreamUnzip = fs.createReadStream('output.txt.gz');
const writeStreamUnzip = fs.createWriteStream('unziped_output.txt');
const gzipUnzip = zlib.createUnzip();

readStreamUnzip.pipe(gzipUnzip).pipe(writeStreamUnzip);

writeStreamUnzip.on('finish', () => {
    console.log('文件已解压完成');
});
