"use client";
import { Button, Input, Tabs } from "@/components/ui";
import { loginSchema } from "@/lib/zodSchemas/formSchemas";
import { useState } from "react";
import { toast } from "sonner";
import { ZodError } from "zod";

export default function Page() {
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
      const validatedData = loginSchema.parse({ email, password });
      setError({});
      toast("Submitted values", {
        description: `${validatedData.email}\n${validatedData.password}`,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        setError(error.flatten().fieldErrors);
      }
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground pb-20">
      <div className="flex justify-center w-[600px] h-fit mt-40">
        <Tabs.Tabs defaultValue="login" className="w-[400px] items-center  ">
          <Tabs.TabsList>
            <Tabs.TabsTrigger value="login">Login</Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="register">Register</Tabs.TabsTrigger>
          </Tabs.TabsList>
          <Tabs.TabsContent
            value="login"
            className="border border-border rounded-lg">
            <form
              onSubmit={(e) => onSubmitHandler(e)}
              className="flex flex-col w-full h-fit p-8 gap-y-2">
              <h3 className="text-base font-semibold">Login to your Account</h3>
              <p className="text-md font-light opacity-85 pb-8">
                Welcome, nice to see you here again.{" "}
              </p>
              <div className="flex flex-col gap-y-3 pb-6">
                <Input placeholder="Email Address" name="email" />
                {error && <span>{error.email}</span>}
                <Input placeholder="Password" type="password" name="password" />
                {error && <span>{error.password}</span>}
              </div>
              <Button type="submit">Login</Button>
            </form>
          </Tabs.TabsContent>
          <Tabs.TabsContent value="register"></Tabs.TabsContent>
        </Tabs.Tabs>
      </div>
    </div>
  );
}
