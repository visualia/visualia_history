import { defineAppSetup } from "@slidev/types";
import { Visualia } from "visualia";

export default defineAppSetup(({ app }) => {
  app.use(Visualia);
});
