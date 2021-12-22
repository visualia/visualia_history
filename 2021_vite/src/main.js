import { createApp } from "vue";
import { Visualia } from "visualia3";
import "visualia3/style.css";
import "./style.css";

import App from "./App.md";

const app = createApp(App);
app.use(Visualia);
app.mount("#app");
