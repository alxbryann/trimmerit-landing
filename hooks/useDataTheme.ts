'use client'

import { useEffect, useState } from 'react'

export type DataTheme = 'light' | 'dark'

function readTheme(): DataTheme {
  if (typeof document === 'undefined') return 'dark'
  const t = document.documentElement.getAttribute('data-theme')
  return t === 'light' ? 'light' : 'dark'
}

/** Tracks `document.documentElement[data-theme]` (synced with Nav toggle). */
export function useDataTheme(): DataTheme {
  const [theme, setTheme] = useState<DataTheme>('dark')

  useEffect(() => {
    setTheme(readTheme())
    const obs = new MutationObserver(() => setTheme(readTheme()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  return theme
}
