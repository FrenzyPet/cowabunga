import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './about-page.module.scss'

const AboutPage: FC = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'about' })
	return <div className={s.wrapper}>{t('О сайте')}</div>
}

export default AboutPage
