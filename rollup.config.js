import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const { main, module,browser } = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: browser,
        name:'index',
        format: 'umd',
        sourcemap: true,
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        jsnext: true,
        main: true,
      }),
      commonjs({
        include: "node_modules/**",
        extensions: [".js"],
        ignoreGlobal: false,
        sourceMap: false,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
    ],
    external: [],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
