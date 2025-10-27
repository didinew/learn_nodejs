import crypto from 'crypto';

// 哈希算法
const data = 'Hello, World!';

// 创建SHA256哈希 createHash
const hash = crypto.createHash('sha256');
hash.update(data);
const digest = hash.digest('hex');

console.log('SHA256 Hash:', digest);

/****
 * 
 * 哈希算法是一种单向加密， 不能被解密， 常用于数据完整性校验和密码存储
 * 常见的哈希算法有MD5、 SHA1、 SHA256等
 */