import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

export function Success() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet title="Pagamento confirmado" />

      <main className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-purple-600/10 p-4">
            <CheckCircleIcon weight="fill" className="h-12 w-12 text-purple-500" />
          </div>
          <h1 className="text-accent-foreground text-2xl font-semibold tracking-tight">
            Pagamento confirmado!
          </h1>
          <p className="text-muted-foreground max-w-sm text-sm">
            Sua conta está sendo criada. Em breve você receberá um e-mail com
            as instruções de acesso à plataforma Jellyfin.
          </p>
        </div>

        <Button
          onClick={() => navigate('/')}
          className="bg-zinc-900 text-white hover:border-2 hover:border-purple-600 hover:bg-zinc-800 hover:text-purple-500"
        >
          Voltar ao início
        </Button>
      </main>
    </>
  );
}
