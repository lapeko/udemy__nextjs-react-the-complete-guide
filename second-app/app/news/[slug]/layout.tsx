import { PropsWithChildren, ReactNode } from "react"

type Props = {
  modal: ReactNode;
}

export default function Layout({ children, modal }: PropsWithChildren<Props>) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}
