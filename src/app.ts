import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import { join } from "path";
import { notFound } from "./middlewares/notFound";
import { exception } from "./middlewares/exception";
import { apollo } from "./apollo";

const app = express();
(async () => {
  app.use(cors());

  const routes = readdirSync(join(__dirname, "routes"));

  await apollo.start();
  apollo.applyMiddleware({ app });

  for (const route of routes) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    app.use(require(join(__dirname, "routes", route)).default);
  }

  app.use(exception);

  app.use(notFound);
})();

export default app;
