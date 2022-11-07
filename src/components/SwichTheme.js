import React from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../context/SiteContext'
import { MdLightMode, MdModeNight } from 'react-icons/md'

export const SwichTheme = () => {
  const { theme, setTheme } = useContext(Context)
  const handleClick = () => {
    console.log('theme')
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    console.log('theme', theme)
    document.body.className = theme
  })
  return (
    <>
      {/* Theme = {theme} <br /> */}
      <span onClick={handleClick}>
        {theme === 'light' ? (
          <MdLightMode className="toggle" />
        ) : (
          <MdModeNight className="toggle" />
        )}
      </span>
    </>
  )
}
