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
import { sendEmail } from '@/lib/server/email';
import { useState } from 'react';
import okform from '../public/okform.svg';
import Image from 'next/image';

export const formSchema = z.object({
  email: z.string().email({
    message: 'El email debe ser válido.',
  }),
  company: z.string().min(2, {
    message: 'El nombre de la empresa debe tener al menos 2 caracteres.',
  }),
  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.',
  }),
});

export function ContactForm() {
  const [sendStatus, setSendStatus] = useState('clean');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      company: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await sendEmail(values);
    if (res.success) {
      setSendStatus('sent');
    } else {
      setSendStatus('error');
    }
  }
  // eslint-disable-next-line no-nested-ternary
  return sendStatus === 'clean' ? (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center"
      >
        <p className="pb-[17px]">
          Puedes compartir tus datos para que te contactemos a la brevedad
        </p>
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
          name="company"
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
          name="message"
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
  ) : sendStatus === 'sent' ? (
    <div className="flex w-full flex-col items-center pt-[87px] text-center max-lg:p-0">
      <Image src={okform} alt="Ok check" unoptimized />
      <p className="my-8 text-[18px] font-bold max-lg:mt-4">
        Tu consulta fue enviada con éxito.
        <br />
        <br />
        En instantes recibirás respuesta a los medios que nos proporcionaste.
      </p>
      <p className="text-[18px] font-normal">
        ¡Gracias por tu contacto!
        <br />
        <br />
        Equipo Wheatleads
      </p>
    </div>
  ) : (
    <div className="flex w-full flex-col items-center pt-[87px] text-center max-lg:p-0">
      <p className="my-8 text-[18px] font-bold max-lg:mt-4">
        ¡Ups! Esto es incómodo...
        <br />
        <br />
        Algo no funcionó bien.
      </p>
      <p className="text-[18px] font-normal">
        Por favor, contáctanos directamente en{' '}
        <a
          href="mailto:info@wheatleads.com"
          className="text-blue-500 underline"
        >
          info@wheatleads.com
        </a>
        <br />
        <br />
        Lamentamos los inconvenientes.
      </p>
    </div>
  );
}
