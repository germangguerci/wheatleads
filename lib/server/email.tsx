'use server';

import type { formSchema } from '@/components/contact-form';
import type { z } from 'zod';

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.EMAILJS_USER_ID;

export async function sendEmail(values: z.infer<typeof formSchema>) {
  try {
    const emailData = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: USER_ID,
      template_params: {
        from_email: values.email,
        from_company: values.company,
        message: values.message,
      },
    };

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      throw new Error('Missing EmailJS configuration.');
    }
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
    return { success: true };
  } catch (error: any) {
    console.error('Error in validation or sending email:', error);
    return {
      success: false,
      error: error.message || 'Unknown error occurred.',
    };
  }
}
