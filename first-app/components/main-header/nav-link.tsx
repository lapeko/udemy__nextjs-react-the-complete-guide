'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, PropsWithChildren } from "react"
import c from "./nav-link.module.css"

type Props = PropsWithChildren<{
    href: string
}>

export const NavLink: FC<Props> = ({ href, children }) => {
    const path = usePathname()
    return <Link href={href} className={path.startsWith(href) ? c.active : undefined}>{children}</Link>
}
