const { build } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  const dev = process.argv.includes("--dev");
  const minify = !dev;

  const watch = process.argv.includes("--watch");

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    external,
    ...config,
  };

  // Watch 동작 설정
  const watchOption = watch
    ? {
        watch: {
          onRebuild(error) {
            if (error) {
              console.error("Rebuild failed:", error);
            } else {
              console.log("Rebuild succeeded");
            }
          },
        },
      }
    : {};

  // Build 실행
  Promise.all([
    build({
      ...baseConfig,
      format: "esm",
      ...watchOption,
    }),
    build({
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
      ...watchOption,
    }),
  ])
    .then(() => {
      console.log("Build completed");
    })
    .catch(() => {
      console.error("Build failed");
      process.exit(1);
    });
};

module.exports = run;
