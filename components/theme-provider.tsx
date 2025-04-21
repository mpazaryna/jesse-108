'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force light theme and disable theme switching
  return <NextThemesProvider forcedTheme="light" {...props}>{children}</NextThemesProvider>
}
