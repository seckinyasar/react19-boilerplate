import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Enter valid email"),
  password: z
    .string()
    .min(10, "At least 10 characters")
    .max(64, "Maximum 64 characters allowed"),
});

export { loginSchema };
