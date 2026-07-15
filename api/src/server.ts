import { app } from "./app";
import { env } from "./env";

app
  .listen({
    host: "0.0.0.0", // acesso externo
    port: env.PORT, // porta
  })
  .then(() => {
    console.log("HTTP Server Running! 🚀");
  });
