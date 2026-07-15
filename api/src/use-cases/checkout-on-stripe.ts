interface CheckoutOnStripeUseCaseRequest {
  username: string;
  email: string;
  password: string;
}

interface CheckoutOnStripeUseCaseResponse {
  url: String;
}

export class CheckoutOnStripeUseCase {
  async execute({
    username,
    email,
    password,
  }: CheckoutOnStripeUseCaseRequest): Promise<CheckoutOnStripeUseCaseResponse> {
    return { url: "https://.." };
  }
}
