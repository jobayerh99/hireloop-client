"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "cn"

import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { isNavActive, mainNav } from "@/lib/navigation"

export function MobileNav({ pathname }: { pathname: string | null }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-10 cursor-pointer rounded-xl text-white hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[min(88vw,380px)] gap-0 border-white/10 bg-[#0b0b0c] p-0 data-[side=right]:w-[min(88vw,380px)] sm:max-w-[380px]"
      >
        <SheetHeader className="border-b border-white/10 p-6">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Browse HireLoop pages and account links.
          </SheetDescription>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="w-fit rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <Image
              src={logo}
              alt="HireLoop"
              className="h-10 w-auto"
            />
          </Link>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
          {mainNav.map((item) => {
            const active = isNavActive(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-xl px-4 py-3 text-lg tracking-[-0.2px] transition-colors",
                  active
                    ? "bg-white/10 font-semibold text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto space-y-3 border-t border-white/10 p-6">
          <Button
            variant="outline"
            render={
              <Link href="/login" onClick={() => setOpen(false)} />
            }
            className="h-12 w-full rounded-xl border-white/15 bg-transparent text-base font-semibold text-white hover:bg-white/5 hover:text-white dark:border-white/15 dark:bg-transparent dark:hover:bg-white/5"
          >
            Sign In
          </Button>
          <Button
            render={
              <Link href="/signup" onClick={() => setOpen(false)} />
            }
            className="h-12 w-full rounded-xl bg-brand text-base font-medium text-brand-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] ring-1 ring-black/10 hover:bg-brand-hover"
          >
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
