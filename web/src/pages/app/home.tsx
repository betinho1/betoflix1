import { useMutation } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { CircleNotchIcon } from '@phosphor-icons/react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInForm = z.object({
  username: z.string(),
  email: z.email(),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signInForm>;

export function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  });

  const { mutateAsync: checkout } = useMutation({
    mutationFn: handleCheckOut,
  });

  async function handleCheckOut(data: SignInForm) {
    try {
      console.log(data);
      // throw new Error('');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Checkout realizado com sucesso.');

      navigate('/');
    } catch {
      toast.error('Credenciais inválidas.');
    }
  }

  return (
    <>
      <Helmet title="Checkout" />

      <main className="flex h-full flex-col items-center justify-center p-8 lg:p-20">
        <div className="flex w-full max-w-100 flex-col gap-8">
          <header className="flex flex-col gap-2 text-left">
            <div className="flex justify-end">
              <ThemeToggle />
            </div>

            <h1 className="text-accent-foreground p-4 text-3xl font-semibold tracking-tight">
              Assine agora!
            </h1>
            <p className="text-muted-foreground text-sm">
              Bem-vindo! Insira seus dados para solicitar acesso à plataforma
              Jellyfin.
            </p>
          </header>

          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(handleCheckOut)}
          >
            <div className="space-y-4">
              <Field className="space-y-2">
                <FieldLabel className="text-accent-foreground font-medium">
                  Username
                </FieldLabel>
                <Input
                  {...register('username')}
                  type="username"
                  placeholder="exemplo@email.com"
                  className="text-accent-foreground h-11 transition-all focus:ring-blue-600"
                />
              </Field>

              <Field className="space-y-2">
                <FieldLabel className="text-accent-foreground font-medium">
                  E-mail
                </FieldLabel>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="exemplo@email.com"
                  className="text-accent-foreground h-11 transition-all focus:ring-blue-600"
                />
              </Field>

              <Field className="space-y-2">
                <div className="flex items-center justify-between">
                  <FieldLabel className="text-accent-foreground font-medium">
                    Senha
                  </FieldLabel>
                </div>
                <Input
                  type="password"
                  {...register('password')}
                  placeholder="••••••••"
                  className="text-accent-foreground h-11"
                />
              </Field>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex h-11 w-full flex-row items-center justify-center gap-2 bg-zinc-900 text-white shadow-sm transition-all hover:cursor-pointer hover:border-2 hover:border-purple-600 hover:bg-zinc-800 hover:text-purple-500 active:scale-[0.98] dark:hover:border-purple-800 dark:hover:text-purple-600"
            >
              {isSubmitting && (
                <CircleNotchIcon className="h-14 w-14 animate-spin" />
              )}
              Acessar plataforma
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
