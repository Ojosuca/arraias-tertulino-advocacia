import z from "zod";

export const ContactSubmissionSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactSubmissionType = z.infer<typeof ContactSubmissionSchema>;

export const ContactSubmissionResponse = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContactSubmissionResponseType = z.infer<typeof ContactSubmissionResponse>;
