"use client";
import Discord from "@/components/icons/discord";
import Github from "@/components/icons/github";
import Google from "@/components/icons/google";
import MetaLogo from "@/components/icons/metalogo";
import { Button, Input, Tabs } from "@/components/ui";
import { loginSchema } from "@/lib/zodSchemas/formSchemas";
import { toast } from "sonner";
import { ZodError } from "zod";

export default function Page() {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const validatedData = loginSchema.parse({ email });
      setError({});
      toast("Submitted values", {
        description: `${validatedData.email}`,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        setError(error.flatten().fieldErrors);
      }
    }
  };

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

          {/* //* LOGIN */}
          <Tabs.TabsContent
            value="login"
            className="border border-border rounded-[20px] p-10"
          >
            <form
              onSubmit={(e) => onSubmitHandler(e)}
              className="flex flex-col w-full h-fit items-center gap-8"
            >
              {/* //? logo & title */}
              <div className="flex flex-col w-full items-center gap-4">
                <MetaLogo width={54} height={54} />
                <h3 className="text-4xl font-semibold">Enter your email</h3>
              </div>
              {/* //? email input */}
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor="email"
                  className="text-base text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="contactseckin@gmail.com"
                  name="email"
                  required
                  type="email"
                />
                <Button type="submit" className="text-base">
                  Continue
                </Button>
              </div>
              {/* //? OAuth icons */}
              <div className="flex flex-col w-full items-center gap-8">
                <div className="flex w-full items-center justify-center">
                  <span className="w-full h-[1px] bg-border"></span>
                  <span className="text-muted-foreground text-base px-3">
                    OR
                  </span>
                  <span className="w-full h-[1px] bg-border"></span>
                </div>
                {/* //? icons */}
                <div className="flex w-full items-center justify-center gap-2.5">
                  <Button
                    type="button"
                    variant="onlyIcon"
                    size="icon"
                    className="flex flex-1 bg-[#ededed]"
                  >
                    <Google className="shrink-0 size-6" />
                  </Button>
                  <Button
                    type="button"
                    variant="onlyIcon"
                    size="icon"
                    className="flex flex-1 bg-[#ededed]"
                  >
                    <Github className="shrink-0 size-6" />
                  </Button>
                  <Button
                    type="button"
                    variant="onlyIcon"
                    size="icon"
                    className="flex flex-1 bg-[#5764f2]"
                  >
                    <Discord className="shrink-0 size-6" />
                  </Button>
                </div>
              </div>
            </form>
          </Tabs.TabsContent>

          {/* //* REGISTER */}
          <Tabs.TabsContent
            value="register"
            className="border border-border rounded-[20px] p-10"
          >
            <form
              onSubmit={(e) => onSubmitHandler(e)}
              className="flex flex-col w-full h-fit items-center gap-8"
            >
              {/* //? logo & title */}
              <div className="flex flex-col w-full items-center gap-4">
                <MetaLogo width={54} height={54} />
                <h3 className="text-4xl font-semibold">Create your account</h3>
              </div>
              {/* //? email input */}
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor="register-email"
                  className="text-base text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="register-email"
                  placeholder="contactseckin@gmail.com"
                  name="email"
                  required
                  type="email"
                />
                <Button type="submit" className="text-base">
                  Continue
                </Button>
              </div>
              {/* //? OAuth icons */}
              <div className="flex flex-col w-full items-center gap-8">
                <div className="flex w-full items-center justify-center">
                  <span className="w-full h-[1px] bg-border"></span>
                  <span className="text-muted-foreground text-base px-3">
                    OR
                  </span>
                  <span className="w-full h-[1px] bg-border"></span>
                </div>
                {/* //? icons */}
                <div className="flex w-full items-center justify-center gap-2.5">
                  <Button
                    type="button"
                    variant="onlyIcon"
                    size="icon"
                    className="flex flex-1 bg-[#ededed]"
                  >
                    <Google className="shrink-0 size-6" />
                  </Button>
                  <Button
                    type="button"
                    variant="onlyIcon"
                    size="icon"
                    className="flex flex-1 bg-[#ededed]"
                  >
                    <Github className="shrink-0 size-6" />
                  </Button>
                  <Button
                    type="button"
                    variant="onlyIcon"
                    size="icon"
                    className="flex flex-1 bg-[#5764f2]"
                  >
                    <Discord className="shrink-0 size-6" />
                  </Button>
                </div>
              </div>
            </form>
          </Tabs.TabsContent>
        </Tabs.Tabs>
      </section>
    </main>
  );
}
