import crypto from 'crypto';

/**
 * 非对称加密
*/
// 生成RSA 密钥对 generateKeyPairSync
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048
});

// 要加密的数据
const data = 'Hello, World!';

// 使用公钥加密数据 publicEncrypt
const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  },
  Buffer.from(data)
);

console.log('Encrypted data:', encryptedData.toString('base64'));

// 使用私钥解密数据 privateDecrypt
const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  },
  encryptedData
);

console.log('Decrypted data:', decryptedData.toString('utf8'));

/****
 * 
 * 非对称加密使用一对密钥（公钥和私钥）进行加密和解密， 提供更高的安全性
 * 公钥可以公开分发， 私钥必须保密， 适合用于加密少量数据或传输加密密钥
 * 在实际中 非对称加密密钥来兑换对称加密的密钥， 然后使用对称加密来加密大量数据
 */