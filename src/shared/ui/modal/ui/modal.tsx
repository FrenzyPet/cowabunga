import { FC, ReactNode, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { Mods, cn } from 'shared/lib/classnames/classnames'

import s from './modal.module.scss'

interface IModalProps {
	className?: string
	children: ReactNode
	isOpen: boolean
	onClose: () => void
	lazy?: boolean
}

export const Modal: FC<IModalProps> = ({ className, children, isOpen, onClose }) => {
	const [isClosing, setIsClosing] = useState<boolean>(false)
	const [isMount, setIsMount] = useState<boolean>(false)

	const timer = useRef<ReturnType<typeof setTimeout>>()

	useEffect(() => {
		if (isOpen) setIsMount(true)
	}, [isOpen])

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

	const mods: Mods = {
		[s.opened]: isOpen,
		[s.isClosing]: isClosing,
	}

	const overlayMods: Mods = {
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

	if (lazy && !isMount) {
		return null
	}

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
