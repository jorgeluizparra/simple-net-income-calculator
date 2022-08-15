const path = require("path");

const ENVIRONMENT = process.env.NODE_ENV;

module.exports={
    mode: ENVIRONMENT ? ENVIRONMENT : "development",
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    devServer: {
        port: "3030",
        static: ["./public"],
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  'babel-loader'
            }
        ]
    }
}