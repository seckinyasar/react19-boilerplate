import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Enter valid email"),
});

export { loginSchema };
