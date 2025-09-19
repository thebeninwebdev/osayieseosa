"use client"
import type React from "react"
import { useState, useRef } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const t = useTranslations("Contact")

  const form = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        toast.error(errorData?.error || "Failed to send email.")
      }

      toast.success("Message sent successfully!")
      ;(e.target as HTMLFormElement).reset()
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-6xl w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 p-4 md:p-8">
      {/* Promotional text section - only visible on xl screens */}
      <div className="hidden xl:flex flex-col justify-center space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
          Discover What We Have to Offer
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Before you reach out, take a moment to explore our site. You&apos;ll find innovative solutions, cutting-edge
          features, and everything you need to elevate your experience.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            <span className="text-neutral-700 dark:text-neutral-300">Explore our latest features</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            <span className="text-neutral-700 dark:text-neutral-300">Check out our portfolio</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            <span className="text-neutral-700 dark:text-neutral-300">Learn about our services</span>
          </div>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
          Ready to get started? Fill out the form and let&apos;s connect!
        </p>
      </div>

      {/* Contact form section */}
      <div className="rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">{t("title")}</h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">{t("description")}</p>

        <form className="my-8" onSubmit={handleSubmit} ref={form}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstname">Name</Label>
            <Input
              id="firstname"
              placeholder="Jeremiah Udoh"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="johndoe@example.com"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="hello Eseosa"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:from-neutral-300 disabled:to-neutral-300 disabled:dark:from-neutral-700 disabled:dark:to-neutral-700 disabled:cursor-not-allowed disabled:shadow-none"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading && (
              <>
                Send it &rarr;
                <BottomGradient />
              </>
            )}
            {isLoading && "Loading..."}
          </button>
        </form>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
}
