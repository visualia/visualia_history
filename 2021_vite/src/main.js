import { createApp } from "vue";
import { Visualia } from "visualia3";
import "visualia3/style.css";
import "./style.css";

import index from "./index.md";

const app = createApp(index);
app.use(Visualia);
app.mount("#app");
