import { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
}

export const Input: FC<IInputProps> = memo((props) => {
	const { className, onChange, value, type, placeholder, autoFocus, ...otherProps } = props

	const [isFocus, setIsFocus] = useState<boolean>(false)
	const [carriagePosition, setCarriagePosition] = useState(0)
	const inputRef = useRef<HTMLInputElement>(null)

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		onChange?.(value)
	}

	const onBlur = () => {
		setIsFocus(false)
	}

	const onFocus = () => {
		setIsFocus(true)
	}

	const onSelect = (e: any) => {
		setCarriagePosition((e?.target?.selectionStart as number) || 0)
	}

	useEffect(() => {
		if (autoFocus) {
			setIsFocus(true)
			inputRef.current.focus()
		}
	}, [autoFocus])

	return (
		<div className={cn(s.inputWrapper, {}, [className])}>
			{!!placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}

			<div className={s.carriageWrapper}>
				<input
					ref={inputRef}
					className={cn(s.input)}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
					{...otherProps}
				/>

				{isFocus && <span className={s.carriage} style={{ left: `${carriagePosition * 9.63}px` }} />}
			</div>
		</div>
	)
})
