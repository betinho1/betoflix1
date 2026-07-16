import { usersRoutes } from "./controllers/users/routes";
import { FastifyTypedInstance } from "@/types";
import { audit } from "./middlewares/audit";
import { stripeRoutes } from "./controllers/stripe/routes";

export async function appRoutes(app: FastifyTypedInstance) {
  app.addHook("onResponse", audit);

  app.register(usersRoutes);
  app.register(stripeRoutes);
}
