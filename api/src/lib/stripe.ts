import { env } from "@/env";
import Stripe from "stripe";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-06-24.dahlia", // versão mais recente
  appInfo: {
    name: "Jellyfin Stripe API", // nome para localizar via Stripe
  },
});
