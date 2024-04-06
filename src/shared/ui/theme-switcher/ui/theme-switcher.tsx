import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Theme, useTheme } from 'app/providers/theme-provider'
import s from './theme-switcher.module.scss'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button } from 'shared/ui/button'

interface IThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			className={cn(s.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? (
				<div className={s.wrapper}>
					<DarkIcon className={s.icon} />
				</div>
			) : (
				<div className={s.wrapper}>
					<LightIcon className={s.icon} />
				</div>
			)}
		</Button>
	)
}
