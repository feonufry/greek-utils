import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default [
    // browser-friendly UMD build, minified
    {
        input: "out/build/app.js",
        output: {
            file: "dist/app.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    }
];
