import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";

export default [
    // browser-friendly UMD build, minified
    {
        input: "out/build/app/app.js",
        output: {
            file: "dist/app.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            sourcemaps(),
        ]
    }
];
