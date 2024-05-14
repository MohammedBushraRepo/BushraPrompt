"use client"
import { SessionProvider } from "next-auth/react"

//Get The Children And the current Session  through props
const Provider = ({children , session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider