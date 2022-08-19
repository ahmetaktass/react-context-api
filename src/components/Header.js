import React from 'react'
import { SwichLanguage } from './SwichLanguage'
import { SwichTheme } from './SwichTheme'

export default function Header() {
  return (
    <header>
      Header
      <SwichTheme />
      <SwichLanguage />
    </header>
  )
}
