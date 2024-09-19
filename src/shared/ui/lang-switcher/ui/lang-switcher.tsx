import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'

import s from './lang-switcher.module.scss'

interface ILangSwitcherProps {
	className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = memo(({ className }) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}
	return (
		<Button className={cn(s.langSwitcher, {}, [className])} theme={ButtonTheme.CLEAR_INVERT} onClick={toggle}>
			{t('rus')}
		</Button>
	)
})
