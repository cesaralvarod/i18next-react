import { useTranslation } from 'react-i18next'

export default function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className="App">
      <h1>{t('welcome.title', { name: 'Cesar' })}</h1>

      <div>
        <h3>{t('modify_lang')}</h3>

        <p>{t('lang', { lang: i18n.language })}</p>
        <div>
          <button onClick={() => i18n.changeLanguage('en')}>English</button>
          <button onClick={() => i18n.changeLanguage('es')}>Spanish</button>
        </div>
      </div>
    </div>
  )
}
