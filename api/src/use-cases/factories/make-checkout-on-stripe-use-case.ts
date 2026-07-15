import { CheckoutOnStripeUseCase } from "../checkout-on-stripe";

export function makeCheckoutOnStripeUseCase() {
  const checkoutOnStripeUseCase = new CheckoutOnStripeUseCase();

  return checkoutOnStripeUseCase;
}
