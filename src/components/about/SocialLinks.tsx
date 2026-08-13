"use client"

import Link from 'next/link'
import { showEmail, email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'


export default function SocialLinks() {
    return (
        <div>
            <div className="mt-6 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <div key={link.name} className="group flex flex-row ml-3 justify-start items-center text-md font-medium">
                    <CustomIcon name={link.icon} size={22}/>
                    {link.href ? (
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4 transition hover:text-teal-500 dark:hover:text-teal-500"
                      >
                        {link.handle ?? link.name}
                      </Link>
                    ) : (
                      <span className="ml-4 text-zinc-700 dark:text-zinc-200">
                        {link.handle}
                      </span>
                    )}
                  </div>
                ))}
            </div>
            {showEmail && email && (
              <div className="mt-8 border-t pt-8 ">
                  <Link
                      href={`mailto:${email}`}
                      className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  >
                      <CustomIcon name="email" size={22}/>
                      <span className="ml-4">{email}</span>
                  </Link>
              </div>
            )}
        </div>

    )
}
