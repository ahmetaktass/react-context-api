import React from 'react'
import { useContext } from 'react'
import SiteContext, { Context } from '../context/SiteContext'

export const SwichTheme = () => {
  const { theme, setTheme } = useContext(Context)
  return (
    <>
      Mevcut Tema = {theme} <br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Temayı Değiştir
      </button>
    </>
  )
}
