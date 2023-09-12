import { changeLanguage } from 'i18next'
import React from 'react'
import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { BsTranslate } from 'react-icons/bs'

const LanguageToggle = () => {
  
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("de")
  
  const changeLangState = () => {
    const newLanguage = language === "de" ? "en" : "de";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }


  return (
    <div>
        <button onClick={changeLangState} className='btn btn-outline' >{language === "de" ? "EN" : "DE"}</button>
    </div>
  )
}

export default LanguageToggle