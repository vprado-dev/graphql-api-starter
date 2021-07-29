import dotenv from "dotenv-safe";
import { apollo } from "./apollo";

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 3000;

(async () => {
  app.listen(PORT, () =>
    console.info(
      `🟢 Listening at http://localhost:${PORT}${apollo.graphqlPath}`,
    ),
  );
})().catch((err) => {
  console.log(err);
  process.exit(1);
});
