import { env } from "@/env";
import { stripe } from "@/lib/stripe";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function CheckoutOnStripe(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const requestCheckoutOnStripeSchema = z.object({
    email: z.email(),
    username: z.string().max(38),
    password: z.string().min(4).max(32),
  });

  try {
    const { email, username, password } = requestCheckoutOnStripeSchema.parse(
      req.body,
    );

    const response = await fetch(`${env.JELLYFIN_URL}/Users`, {
      headers: {
        Authorization: `MediaBrowser Token="${env.JELLYFIN_API_KEY}"`,
      },
    });

    const users = (await response.json()) as { Name: string }[];
    const alreadyExists = users.some(
      (user: { Name: string }) => user.Name === username,
    );

    if (alreadyExists) {
      return reply.status(409).send({ message: "Username already exists." });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: env.STRIPE_PRICE_ID, quantity: 1 }],
      metadata: { email, username, password },
      success_url: `${env.FRONTEND_URL}/success`,
      cancel_url: `${env.FRONTEND_URL}/cancel`,
    });

    return reply.status(201).send({ url: session.url });
  } catch (err) {
    throw err;
  }
}
