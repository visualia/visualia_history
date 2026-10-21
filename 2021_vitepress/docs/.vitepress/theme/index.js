import DefaultTheme from "vitepress/theme";
import { Visualia } from "visualia3";
import "visualia3/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
