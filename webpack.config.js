module.exports = {
    entry: ['./src/script/hello.js', './src/script/copy-email.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
}
