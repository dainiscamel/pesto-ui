import esbuild from "esbuild";
import fs from "fs";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;
const watch = process.argv.includes("--watch");

const externalDependencies = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const config = {
  entryPoints: ["src/index.ts"], // ts 파일 경로가 정확한지 확인
  bundle: true,
  minify,
  sourcemap: true,
  outdir: "dist",
  target: "es2019",
  external: externalDependencies, // 외부 의존성 처리
};

const build = () => {
  return Promise.all([
    // ES Module 빌드
    esbuild
      .build({
        ...config,
        format: "esm",
      })
      .catch((error) => {
        console.error("ESM Build failed:", error);
        process.exit(1);
      }),

    // CommonJS Module 빌드
    esbuild
      .build({
        ...config,
        format: "cjs",
        outExtension: { ".js": ".cjs" },
      })
      .catch((error) => {
        console.error("CJS Build failed:", error);
        process.exit(1);
      }),
  ]);
};

// 초기 빌드 실행
build()
  .then(() => console.log("Initial build completed"))
  .catch((error) => {
    console.error("Build Failed:", error);
    process.exit(1);
  });

if (watch) {
  fs.watch("src", { recursive: true }, (eventType, filename) => {
    if (filename) {
      console.log(`File changed: ${filename}`);
      build()
        .then(() => console.log("Rebuild completed"))
        .catch((error) => console.error("Build Failed:", error));
    }
  });
}
