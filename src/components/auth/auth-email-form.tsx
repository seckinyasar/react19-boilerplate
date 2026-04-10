"use client";

import MetaLogo from "@/components/icons/metalogo";
import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  authEmailSchema,
  type AuthEmailFormValues,
} from "@/lib/zodSchemas/formSchemas";
import { useState } from "react";
import { toast } from "sonner";
import { ZodError } from "zod";
import { OAuthProvidersSection } from "./oauth-providers-section";

type AuthEmailFormProps = {
  title: string;
  emailInputId: string;
  className?: string;
  onSubmitEmail: (data: AuthEmailFormValues) => void | Promise<void>;
};

export function AuthEmailForm({
  title,
  emailInputId,
  className,
  onSubmitEmail,
}: AuthEmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data: AuthEmailFormValues;
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      data = authEmailSchema.parse({ email });
    } catch (error) {
      if (error instanceof ZodError) {
        const msg = error.issues.find(
          (issue) => issue.path[0] === "email"
        )?.message;
        toast.error(msg ?? "Enter valid email");
      }
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmitEmail(data);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={cn("flex flex-col w-full h-fit items-center gap-8", className)}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full items-center gap-4">
        <MetaLogo width={54} height={54} />
        <h3 className="text-4xl font-semibold text-center">{title}</h3>
      </div>

      <div className="flex flex-col w-full gap-3">
        <label
          htmlFor={emailInputId}
          className="text-base text-muted-foreground"
        >
          Email
        </label>
        <Input
          id={emailInputId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="text-base"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Please wait…" : "Continue"}
        </Button>
      </div>

      <OAuthProvidersSection />
    </form>
  );
}
