import crypto from 'crypto';

// 对称加密
// 生成一个随机的16字节的初始化向量IV
const iv = Buffer.from(crypto.randomBytes(16));

// 生成一个随机的 32字节的密钥
const key = crypto.randomBytes(32);
// 创建加密实例 使用AES-256-CBC算法 提供密钥和初始化向量IV
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
// 要加密的数据
const data = 'Hello, World!';

// 对输入数据进行加密，并输出加密结果的十六进制表示
cipher.update(data, 'utf8', 'hex');
const encrypted = cipher.final('hex');

console.log('Encrypted data:', encrypted);

// 解密
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
decipher.update(encrypted, 'hex', 'utf8');
const decrypted = decipher.final('utf8');

console.log('Decrypted data:', decrypted);

/****
 * 
 * 对称加密是一种简单而迅速的加密方式， 对称加密速度很快 适合对大量数据进行加密
 * 但对称加密的安全性较低， 因为加密和解密使用相同的密钥， 如果密钥被泄露， 数据就会被破解
 */

