"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { isNavActive, mainNav } from "@/lib/navigation"

export function SiteHeaderView({ pathname }: { pathname: string | null }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-page via-page/80 to-transparent px-4 pb-3 pt-4 sm:px-6 lg:px-[60px] lg:pt-6">
      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between gap-6 rounded-2xl bg-surface px-4 sm:h-[74px] sm:px-6">
        <Link
          href="/"
          aria-label="HireLoop home"
          className="shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
        >
          <Image
            src={logo}
            alt="HireLoop"
            priority
            className="h-8 w-auto sm:h-10 lg:h-11"
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-6 lg:flex"
        >
          <ul className="flex items-center gap-10">
            {mainNav.map((item) => {
              const active = isNavActive(pathname, item.href)

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-[16px] leading-[1.8] tracking-[-0.2px] transition-colors outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-4 focus-visible:ring-offset-surface",
                      active
                        ? "font-semibold text-white"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <span aria-hidden="true" className="h-6 w-px bg-white/30" />

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="flex h-[58px] items-center rounded-xl px-6 text-[18px] font-semibold text-brand transition-colors outline-none hover:text-brand-hover focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
            >
              Sign In
            </Link>
            <Button
              render={<Link href="/signup" />}
              className="h-[52px] rounded-xl bg-brand px-6 text-[18px] font-medium text-brand-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] ring-1 ring-black/10 hover:bg-brand-hover"
            >
              Get Started
            </Button>
          </div>
        </nav>

        <MobileNav pathname={pathname} />
      </div>
    </header>
  )
}

export function SiteHeader() {
  const pathname = usePathname()

  return <SiteHeaderView pathname={pathname} />
}
