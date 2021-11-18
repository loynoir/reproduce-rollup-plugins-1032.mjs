import typescript from "@rollup/plugin-typescript";

export default {
    input: "./index.mjs",
    plugins: [typescript({})],
};
