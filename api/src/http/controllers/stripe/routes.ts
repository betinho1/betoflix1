import z from "zod";
import { FastifyTypedInstance } from "@/types";
import { WebhookOnStripe } from "./webhook-on-stripe-controller";

export async function stripeRoutes(app: FastifyTypedInstance) {
  app.post(
    "/webhook",
    {
      config: { rawBody: true },
      schema: {
        tags: ["stripe"],
        description: "Receive Stripe webhook event",
        response: {
          200: z.object({}).describe("Event received."),
        },
      },
    },
    WebhookOnStripe,
  );
}
