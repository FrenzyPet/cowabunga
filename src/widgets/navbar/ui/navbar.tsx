import { FC, useCallback, useState } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Modal } from 'shared/ui/modal'

import s from './navbar.module.scss'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModalOpen((prev) => !prev)
	}, [])

	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERT} className={s.links}>
				Войти
			</Button>

			<Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
				<div>Авторизация</div>
			</Modal>
		</div>
	)
}
