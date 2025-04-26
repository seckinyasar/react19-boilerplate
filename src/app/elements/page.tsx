"use client";
import {
  Accordion,
  Breadcrumb,
  Button,
  CheckboxWithText,
  Input,
  Textarea,
} from "@/components/ui/index";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground pb-20">
      <div className="flex justify-center w-[1200px] h-fit mt-20 rounded-[10px]">
        <div className="flex flex-col gap-y-10 ">
          {/* //! Buttons */}
          <section className="flex flex-col gap-6  border border-border p-6 rounded-xl">
            <span className="text-[12.8px]">Buttons</span>
            <div className="flex w-full gap-x-4">
              <Button variant="default" size="sm">
                Default
              </Button>{" "}
              <Button variant="destructive" size="sm">
                Destructive
              </Button>{" "}
              <Button variant="outline" size="sm">
                Outline
              </Button>{" "}
              <Button variant="secondary" size="sm">
                Secondary
              </Button>{" "}
              <Button variant="ghost" size="sm">
                Ghost
              </Button>{" "}
              <Button variant="link" size="sm">
                Link
              </Button>
            </div>
            <div className="flex w-full gap-x-4">
              <Button variant="default" size="default">
                Default
              </Button>{" "}
              <Button variant="destructive" size="default">
                Destructive
              </Button>{" "}
              <Button variant="outline" size="default">
                Outline
              </Button>{" "}
              <Button variant="secondary" size="default">
                Secondary
              </Button>{" "}
              <Button variant="ghost" size="default">
                Ghost
              </Button>{" "}
              <Button variant="link" size="default">
                Link
              </Button>
            </div>
            <div className="flex w-full gap-x-4">
              <Button variant="default" size="lg">
                Default
              </Button>{" "}
              <Button variant="destructive" size="lg">
                Destructive
              </Button>{" "}
              <Button variant="outline" size="lg">
                Outline
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Secondary
              </Button>{" "}
              <Button variant="ghost" size="lg">
                Ghost
              </Button>{" "}
              <Button variant="link" size="lg">
                Link
              </Button>
            </div>
          </section>
          {/* //! Inputs */}
          <section className="flex flex-col gap-6 border border-border p-6 rounded-xl">
            <h2 className="text-[12.8px]">Inputs</h2>
            <div className="flex flex-col items-center gap-6 w-full">
              <Input type="email" className="w-[320px]" />
              <Input type="password" className="w-[320px]" />
              <Input type="file" />
            </div>
          </section>
          {/* //! Textarea  */}
          <section className="flex flex-col gap-6 border border-border p-6 rounded-xl">
            <h2 className="text-[12.8px]">Textarea</h2>
            <div className="w-[500px] self-center">
              <Textarea placeholder="Home Address" />
            </div>
          </section>
          {/* //! BreadCrumb */}
          <section className="flex flex-col gap-6 border border-border p-6 rounded-xl">
            <h2 className="text-[12.8px]">Breadcrump</h2>
            <Breadcrumb.Breadcrumb>
              <Breadcrumb.BreadcrumbList>
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink>Home</Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink>
                    Current Page
                  </Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
              </Breadcrumb.BreadcrumbList>
            </Breadcrumb.Breadcrumb>
          </section>
          {/* //! Accordion */}
          <section className="flex flex-col gap-6 border border-border p-6 rounded-xl max-w-[727px]">
            <h2 className="text-[12.8px]">Accordion</h2>
            <Accordion.Accordion type="single" collapsible>
              <Accordion.AccordionItem value="1">
                <Accordion.AccordionTrigger>
                  Is it accessible ?
                </Accordion.AccordionTrigger>
                <Accordion.AccordionContent>
                  {" "}
                  Yes. It adheres to the WAI-ARIA design pattern.
                </Accordion.AccordionContent>
              </Accordion.AccordionItem>
              <Accordion.AccordionItem value="2">
                <Accordion.AccordionTrigger>
                  How does this work ?
                </Accordion.AccordionTrigger>
                <Accordion.AccordionContent>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, unde repudiandae excepturi odio suscipit, quo ipsa
                  accusantium sit aspernatur, placeat fugiat molestiae nihil
                  voluptatum. Quaerat necessitatibus vel mollitia magni nemo.
                  Perferendis consequatur sapiente, vero tempora eligendi atque
                  ex! Aliquid, modi! Laborum atque odit illo ab eius magni hic
                  reprehenderit quod ad maxime voluptas quibusdam neque
                  accusamus, iure nesciunt pariatur a.
                </Accordion.AccordionContent>
              </Accordion.AccordionItem>
            </Accordion.Accordion>
          </section>
          <section className="flex flex-col gap-6 border border-border p-6 rounded-xl">
            <h2 className="text-[12.8px]">Checkbox</h2>
            <CheckboxWithText text="Accept terms and conditions" />
          </section>
          <section className="flex flex-col gap-6 border border-border p-6 rounded-xl">
            <h2 className="text-[12.8px]">Sonner</h2>
            <div className="w-full flex items-center justify-center">
              <Button
                variant="default"
                onClick={() =>
                  toast("Test", {
                    description: "Testing the sonner component",
                    action: {
                      label: "Undo",
                      onClick: () => {
                        console.log("Undo");
                      },
                    },
                  })
                }>
                Click Me
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
