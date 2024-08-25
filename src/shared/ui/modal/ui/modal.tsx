import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './modal.module.scss'

interface IModalProps {
	className?: string
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<IModalProps> = ({ className, children, isOpen, onClose }) => {
	const [isClosing, setIsClosing] = useState<boolean>(false)

	const timer = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timer.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, 300)
		}
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') closeHandler()
		},
		[closeHandler],
	)

	const onContentCLick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	const mods: Record<string, boolean> = {
		[s.opened]: isOpen,
		[s.isClosing]: isClosing,
	}

	const overlayMods: Record<string, boolean> = {
		[s['overlay--opened']]: isOpen,
		[s['overlay--closing']]: isClosing,
	}

	useEffect(() => {
		if (isOpen) window.addEventListener('keydown', onKeyDown)

		return () => {
			clearTimeout(timer.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	return (
		<div className={cn(s.modal, mods, [className])}>
			<div className={cn(s.overlay, overlayMods)} onClick={closeHandler}>
				<div className={s.content} onClick={onContentCLick}>
					{children}
				</div>
			</div>
		</div>
	)
}
