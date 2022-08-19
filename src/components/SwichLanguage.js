import React from 'react'
import { useContext } from 'react'
import SiteContext, { Context } from '../context/SiteContext'

export const SwichLanguage = () => {
  const { language, setLanguage } = useContext(Context)

  return (
    <div>
      Mevcut Dil = {language} <br />
      <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}>
        Dili Değiştir
      </button>
    </div>
  )
}
