import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

export function Cancel() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet title="Pagamento cancelado" />

      <main className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-red-500/10 p-4">
            <XCircleIcon weight="fill" className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-accent-foreground text-2xl font-semibold tracking-tight">
            Pagamento cancelado
          </h1>
          <p className="text-muted-foreground max-w-sm text-sm">
            Seu pagamento foi cancelado. Nenhuma cobrança foi realizada. Tente
            novamente quando quiser.
          </p>
        </div>

        <Button
          onClick={() => navigate('/')}
          className="bg-zinc-900 text-white hover:border-2 hover:border-purple-600 hover:bg-zinc-800 hover:text-purple-500"
        >
          Tentar novamente
        </Button>
      </main>
    </>
  );
}
