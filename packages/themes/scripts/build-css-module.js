import * as theme from "../dist/index.js";
import fs from "fs";
// theme로 선언된 js 파일을 .css 로 변환

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};

const generateCssTokens = () => {
  const cssVars = [];
  Object.entries(theme.tokens).forEach(([key, value]) => {
    if (key === "colors") {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if (colorKey === "light") {
          const selector = ":root";

          const cssVariables = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subKey, subValue]) =>
                    `--${toCssCasting(mainKey)}-${toCssCasting(
                      subKey
                    )}: ${subValue};`
                )
                .join("\n")
            )
            .join("\n");
          cssVars.push(`${selector} {\n${cssVariables}\n}`);
        }
      });
    }
  });
  return cssVars;
};

const generateCss = () => {
  const tokens = generateCssTokens();

  fs.writeFileSync("dist/themes.css", [...tokens].join("\n"));
  // fs.writeFileSync("dist/themes.css", tokens);
};

generateCss();
