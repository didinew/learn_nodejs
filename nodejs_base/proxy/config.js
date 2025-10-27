const config = {
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    }
}

export default config;