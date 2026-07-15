import axios from 'axios';

import { env } from '@/env';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

if (env.VITE_ENABLE_API_DELAY) {
  // interceptar cada requisição, config -> dados da requisição, podendo customizar
  api.interceptors.request.use(async (config) => {
    // adiciona delay de 2 segundos em cada requisição
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return config;
  });
}
