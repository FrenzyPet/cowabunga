import { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { Mods, cn } from 'shared/lib/classnames/classnames'

import s from './input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
}

export const Input: FC<IInputProps> = memo((props) => {
	const { className, onChange, value, type, placeholder, autoFocus, readOnly, ...otherProps } = props

	const [isFocus, setIsFocus] = useState<boolean>(false)
	const [carriagePosition, setCarriagePosition] = useState(0)
	const inputRef = useRef<HTMLInputElement>(null)

	const isCarriageVisible = isFocus && !readOnly

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

	const mods: Mods = {
		[s.readonly]: readOnly,
	}

	return (
		<div className={cn(s.inputWrapper, mods, [className])}>
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
					readOnly={readOnly}
					{...otherProps}
				/>

				{isCarriageVisible && <span className={s.carriage} style={{ left: `${carriagePosition * 9.63}px` }} />}
			</div>
		</div>
	)
})
