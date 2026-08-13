"use client"

import { socialLinks } from '@/config/infoConfig'
import { ui } from '@/config/ui'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'

export default function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("mt-6 flex items-center gap-1", className)}>
            {socialLinks.map((link) => {
              if (link.href) {
                return (
                  <Link
                    key={link.name}
                    href={`${link.href}?utm_source=${utm_source}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel ?? `${ui.followOn} ${link.name}`}
                    title={link.handle ? `@${link.handle}` : link.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    <CustomIcon name={link.icon} />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                )
              }

              return (
                <span
                  key={link.name}
                  title={`${link.name}: ${link.handle}`}
                  aria-label={`${link.name}: ${link.handle}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  <CustomIcon name={link.icon} />
                  <span className="sr-only">{link.name}: {link.handle}</span>
                </span>
              )
            })}
        </div>
    )
}
