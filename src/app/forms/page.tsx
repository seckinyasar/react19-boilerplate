"use client";
import { AuthEmailForm } from "@/components/auth";
import { Tabs } from "@/components/ui";
import { authClient } from "@/lib/better-auth/auth-client";
import type { AuthEmailFormValues } from "@/lib/zodSchemas/formSchemas";
import { toast } from "sonner";

function submitLogin({ email }: AuthEmailFormValues) {
  toast("Submitted values", { description: email });
}

function submitRegister({ email }: AuthEmailFormValues) {
  toast("Submitted values", { description: email });
}

export default function Page() {
  const { data, isPending, error } = authClient.useSession();

  console.log(data, error);

  return (
    <main
      aria-label="Login and Register Page"
      className="flex w-full min-h-screen justify-center text-foreground"
    >
      <section
        aria-label="Login and Register Form"
        className="flex justify-center w-[600px] h-fit mt-40"
      >
        <Tabs.Tabs defaultValue="login" className="w-[400px] items-center">
          <Tabs.TabsList>
            <Tabs.TabsTrigger value="login">Login</Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="register">Register</Tabs.TabsTrigger>
          </Tabs.TabsList>

          <Tabs.TabsContent
            value="login"
            className="border border-border rounded-[20px] p-10"
          >
            <AuthEmailForm
              title="Enter your email"
              emailInputId="email"
              onSubmitEmail={submitLogin}
            />
          </Tabs.TabsContent>

          <Tabs.TabsContent
            value="register"
            className="border border-border rounded-[20px] p-10"
          >
            <AuthEmailForm
              title="Create your account"
              emailInputId="register-email"
              onSubmitEmail={submitRegister}
            />
          </Tabs.TabsContent>
        </Tabs.Tabs>
      </section>
    </main>
  );
}
