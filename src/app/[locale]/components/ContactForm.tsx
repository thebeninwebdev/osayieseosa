"use client";
import React,{useState,useRef} from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import emailjs from '@emailjs/browser'
import { toast } from "sonner";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  =>  {
    e.preventDefault()
    setIsLoading(true)

    emailjs
    .sendForm('service_phf0kjo', 'template_qe92p5u', form.current as HTMLFormElement, {
      publicKey: 'c0zCWWjxpA7GQuqGQ',
    })
    .then(
      () => {
        setIsLoading(false)
        toast.success("Your email has been received")
        if(form.current !== null) form.current.reset()
      },
      (error) => {
        setIsLoading(false)
        console.log(error)
        toast.error("An error occured, try again")
      },
    );
  }
  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Connect with me
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Reach out to me now so we can discuss further
      </p>

      <form className="my-8" onSubmit={handleSubmit} ref={form}>
          <LabelInputContainer className="mb-4"> 
            <Label htmlFor="firstname">name</Label>
            <Input 
            id="firstname" 
            placeholder="Jeremiah Udoh" 
            type="text" 
            required
            name="from_name"
            />
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            placeholder="johndoe@example.com" 
            type="email" 
            required
            name="user_email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="hello Eseosa"
            required
            name="message"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isLoading}
        >
          {!isLoading&&(
            <>Send it &rarr;<BottomGradient /></>)}
          {isLoading && "Loading..."}
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
