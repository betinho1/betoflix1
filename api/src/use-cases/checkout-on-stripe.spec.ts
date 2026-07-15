import { beforeEach, describe, it } from "vitest";

import { CheckoutOnStripeUseCase } from "./checkout-on-stripe";

let sut: CheckoutOnStripeUseCase;

describe("Checkout On Stripe Use Case", () => {
  beforeEach(() => {
    sut = new CheckoutOnStripeUseCase();
  });

  it.skip("should be able to checkout on stripe", async () => {});
});
