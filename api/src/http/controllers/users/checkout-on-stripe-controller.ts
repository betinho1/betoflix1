import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export function CheckoutOnStripe(req: FastifyRequest, reply: FastifyReply) {
  const requestCheckoutOnStripeSchema = z.object({
    email: z.email(),
    username: z.string().max(38),
    password: z.string().min(4).max(32),
  });

  try {
    const { email, username, password } = requestCheckoutOnStripeSchema.parse(
      req.body,
    );
  } catch {}
}
