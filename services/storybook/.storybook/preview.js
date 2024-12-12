/** @type { import('@storybook/react').Preview } */
import "@pesto-ui/themes/themes.css";
import "./style.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  rootAttributesTooltip: true,
  rootAttribute: {
    root: "body",
    attribute: "class",
    defaultState: {
      name: "Light",
      value: "theme-light",
    },
    states: [
      {
        name: "Dark",
        value: "theme-dark",
      },
    ],
  },
};
const initTheme = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkTheme) {
    document.body.classList.add("theme-dark");
  }
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQueryList.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  });
};
//initTheme();

export default preview;
