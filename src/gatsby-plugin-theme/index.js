import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: "#000",
    secondary: "#73737D",
    accent: "#6166DC",
    grey: "#73737D",
    background: "#fff",
  },
  fonts: {
    serif: "Georgia, Serif",
    sansSerif:
    "'Rubik', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Rubik Mono One", "Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
};