# Jelly Stripe Gateway

**Jelly Stripe Gateway** é um gateway de integração leve, moderno e open-source projetado para automatizar a criação de contas no **Jellyfin** através de assinaturas do **Stripe**. 
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
* **Back-end:** Node.js, Fastify, TypeScript, Stripe SDK
* **Integração:** Jellyfin REST API

## Como configurar

## Como rodar localmente

## Segurança
- Sem Banco de Dados: O sistema não armazena nenhuma senha ou dado confidencial em banco de dados próprio. Os dados viajam de forma criptografada temporariamente nos metadados seguros do Stripe até a criação no Jellyfin.

- Validação de Webhook: O endpoint do back-end valida rigorosamente a assinatura de cada webhook recebido do Stripe, impedindo requisições falsas.

## RFs (requisitos funcionais)

- O usuário deve poder 

## RNFs (requisitos não-funcionais)

## Regra de negócio


Desenvolvido com ☕ e TypeScript. Sinta-se livre para abrir Issues ou enviar Pull Requests!