import { api } from '@/lib/axios';

export interface CheckoutBody {
  username: string;
  email: string;
  password: string;
}

export async function checkout({ username, email, password }: CheckoutBody) {
  try {
    const response = await api.post('/checkout', { username, email, password });

    if (response.status !== 201) {
      throw new Error('Não foi possível realizar checkout no Stripe.');
    }

    const { message, url } = response.data as { message: string; url: string };

    return { message, url };
  } catch (err) {
    throw err;
    // throw new Error('Houve um problema de conexão com o Stripe.');
  }
}
