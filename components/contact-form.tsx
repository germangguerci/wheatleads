'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import CtaButton from './ui/cta-button';

const formSchema = z.object({
  email: z.string().email({
    message: 'El email debe ser válido.',
  }),
  empresa: z.string().min(2, {
    message: 'El nombre de la empresa debe tener al menos 2 caracteres.',
  }),
  mensaje: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.',
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      empresa: '',
      mensaje: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Hola', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-[17px] w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="mt-[20px] text-[#191A15] max-lg:mt-2"
                  placeholder="tuemail@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="empresa"
          render={({ field }) => (
            <FormItem className="mb-[17px] w-full">
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input
                  className="mt-[20px] text-[#191A15] max-lg:mt-2"
                  placeholder="Nombre de la empresa"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem className="mb-[17px] w-full">
              <FormLabel>¿Cómo te ayudamos?</FormLabel>
              <FormControl>
                <Textarea
                  className="mt-[20px] text-[#191A15] max-lg:mt-2"
                  placeholder="Tu mensaje aquí"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CtaButton
          type="submit"
          className="w-full max-w-[201px] px-[30px] py-[20px] text-[17px]"
        >
          Enviar consulta
        </CtaButton>
      </form>
    </Form>
  );
}
