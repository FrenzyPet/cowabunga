import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'

import s from './page-error.module.scss'

interface IPageErrorProps {
	className?: string
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={cn(s.pageError, {}, [className])}>
			<p>Произошла непредвиденная ошибка</p>
			<Button theme={ButtonTheme.CLEAR} onClick={reloadPage}>
				Обновить страницу
			</Button>
		</div>
	)
}
