# Jelly Stripe Gateway

**Jelly Stripe Gateway** é um gateway de integração leve, moderno e open-source projetado para automatizar a criação de contas no **Jellyfin** através de assinaturas do **Stripe**.
![alt text](logo.png) 
- Ideal para administradores de servidores *self-hosted* que desejam automatizar o acesso de usuários e gerenciar cobranças de forma profissional e sem processos manuais.

## Fluxo da Aplicação (operação)

O sistema funciona de forma assíncrona para garantir a segurança dos dados e que nenhuma conta seja criada sem a confirmação do pagamento:

```
[ Usuário ] ➔ Preenche cadastro no Front-end (Vite)
                              │
                              ▼
[ Back-end (Fastify) ] ➔ Gera link de Checkout seguro com dados no metadata
                              │
                              ▼
[ Stripe Checkout ] ➔ Usuário realiza o pagamento (Cartão ou Pix)
                              │
                              ▼ 
[ Back-end (Fastify) ] ➔ Valida assinatura e lê os dados do metadata (Stripe - Webhook disparado após sucesso)
                              │
                              ▼
[ API do Jellyfin ] ➔ Cria a conta ativa no seu servidor automaticamente
```

## Ferramental de Desenvolvimento

* **Front-end:** React, Vite, TypeScript, Tailwind CSS
* **Back-end:** Node.js, Fastify, TypeScript, Stripe SDK, Swagger, Zod Validation, Vitest
* **Integração:** Jellyfin REST API

## Como configurar

## Como rodar localmente

## Segurança
- Sem Banco de Dados: O sistema não armazena nenhuma senha ou dado confidencial em banco de dados próprio. Os dados viajam de forma criptografada temporariamente nos metadados seguros do Stripe até a criação no Jellyfin.

- Validação de Webhook: O endpoint do back-end valida rigorosamente a assinatura de cada webhook recebido do Stripe, impedindo requisições falsas.

## RFs (requisitos funcionais)

- [x] O usuário deve poder realizar checkout na plataforma para pagamento
- [x] O sistema deve redirecionar o usuário para o Stripe Checkout após o cadastro
- [x] O sistema deve criar a conta no Jellyfin automaticamente após confirmação do pagamento
- [x] O usuário deve ser redirecionado para uma página de sucesso/cancelamento após o checkout

## RNFs (requisitos não-funcionais)

- [x] A API deve validar a assinatura do webhook do Stripe antes de processar qualquer evento
- [ ] Dados sensíveis do usuário não devem trafegar em texto puro nos metadados do Stripe
- [ ] O sistema deve utilizar um identificador temporário associado a um cache Redis

## Regra de negócio

- [x] A conta no Jellyfin só deve ser criada após confirmação de pagamento pelo Stripe (evento checkout.session.completed)
- [x] Os dados do usuário (username, email, password) devem trafegar exclusivamente via metadata da sessão do Stripe
- [x] Apenas um plano mensal deve estar disponível para assinatura
- [x] O sistema não deve criar contas duplicadas no Jellyfin para o mesmo email
- [ ] O token temporário deve ser invalidado imediatamente após a criação da conta ou após a expiração do tempo de vida (TTL)

Desenvolvido com ☕ e TypeScript. Sinta-se livre para abrir Issues ou enviar Pull Requests!