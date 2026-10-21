import DefaultTheme from "vitepress/theme";
import { Visualia } from "visualia";

import "visualia/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
