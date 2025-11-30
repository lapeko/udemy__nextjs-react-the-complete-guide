'use client'

import Link from 'next/link';
import { PropsWithChildren } from "react"
import { usePathname } from "next/navigation"

export default ({ children, href }: PropsWithChildren<{ href: string }>) => {
  const path = usePathname()

  return <Link href={href} className={path === href ? "active" : undefined}> {children} </Link>;
}
