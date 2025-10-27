import zlib from 'zlib';
import fs from 'fs';

// 无损压缩 deflate/gzip
const readStream = fs.createReadStream('input.txt');
// fs.createWriteStream
const writeStream = fs.createWriteStream('input.txt.deflate');

// 创建压缩流 createDeflate
const deflate = zlib.createDeflate();

// 管道连接：读取 -> 压缩 -> 写入
readStream.pipe(deflate).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('文件已压缩完成');
});

// 解压deflate文件 createInflate
const readStreamUnzip = fs.createReadStream('input.txt.deflate');
const writeStreamUnzip = fs.createWriteStream('unziped_input.txt');
const deflateUnzip = zlib.createInflate();

readStreamUnzip.pipe(deflateUnzip).pipe(writeStreamUnzip);

writeStreamUnzip.on('finish', () => {
    console.log('文件已解压完成');
});

// 比较这段代码与 index_gzip.js 中的代码：
// index_gzip.js 使用了 gzip 压缩和解压，而 index.js 使用了 deflate 压缩和解压。
// 两者的实现方式类似，都是通过创建可读流、可写流和压缩/解压流，然后使用管道连接它们。
// 唯一的区别在于使用的 zlib 方法不同：index_gzip.js 使用 createGzip 和 createUnzip，而 index.js 使用 createDeflate 和 createInflate。