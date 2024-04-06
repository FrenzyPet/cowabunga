import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import s from './main-page.module.scss'

const MainPage: FC = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'main' })
	return <div className={s.wrapper}>{t('Главная страница')}</div>
}

export default MainPage
