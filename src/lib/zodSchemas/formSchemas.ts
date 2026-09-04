import { z } from "zod";

const authEmailSchema = z.object({
  email: z.email("Enter valid email"),
});

type AuthEmailFormValues = z.infer<typeof authEmailSchema>;

export { authEmailSchema };
export type { AuthEmailFormValues };
