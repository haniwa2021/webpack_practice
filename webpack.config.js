const path = require('path');
const { kill } = require('process');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css/,  // .cssを検知したら…
                use: [          // -> css-loaderを使う
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },  // 下から適応されるのに注意！！
                ],
            },
        ],
    },
}
