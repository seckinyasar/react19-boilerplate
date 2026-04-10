import { z } from "zod";

const authEmailSchema = z.object({
  email: z.email("Enter valid email"),
});

type AuthEmailFormValues = z.infer<typeof authEmailSchema>;

const loginSchema = authEmailSchema;

export { authEmailSchema, loginSchema };
export type { AuthEmailFormValues };
