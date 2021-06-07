import DefaultTheme from "vitepress/theme";
import { Visualia } from "visualia";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
