# 安装prisma
#### npm install -g prisma

# 2. 初始化项目

#### prisma init --datasource-provider mysql

#### npm install dotenv --save-dev

#### npm install @prisma/config --save-dev

```
project/
├── prisma/
│   ├── schema.prisma
├── prisma.config.ts
├── .env
├── package.json

```

### .env
```

    DATABASE_URL="mysql://root:password@localhost:3306/mydb"

```

### 运行  npx prisma migrate dev 根据 prisma/schema.prisma 创建新的数据表

