import React from 'react'

import { SwichTheme } from './SwichTheme'
import '../styles/app.scss'

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <SwichTheme />
      {/* <SwichLanguage /> */}
    </header>
  )
}
