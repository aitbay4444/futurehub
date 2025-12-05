"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Мы используем React.ComponentProps, чтобы он сам вытащил типы из библиотеки
// Это работает с любой версией и не ломается
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}