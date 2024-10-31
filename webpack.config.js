module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};