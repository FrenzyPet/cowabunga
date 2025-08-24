import { ChangeEvent, FC, useMemo } from 'react'
import { Mods, cn } from 'shared/lib/classnames/classnames'

import s from './select.module.scss'

interface ISelectOption {
	value: string
	content: string
}

interface ISelectProps {
	className?: string
	label?: string
	options?: ISelectOption[]
	value?: string
	onChange?: (value: string) => void
	readonly?: boolean
}

export const Select: FC<ISelectProps> = (props) => {
	const { className, label, options, value, onChange, readonly } = props

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value)
	}

	const optionsList = useMemo(() => {
		return options.map((opt) => (
			<option key={opt.content} className={s.option} value={opt.value}>
				{opt.content}
			</option>
		))
	}, [options])

	const mods: Mods = {
		[s.readonly]: readonly,
	}

	return (
		<div className={cn(s.wrapper, mods, [className])}>
			{label && <span className={s.label}>{`${label}>`}</span>}

			<select className={s.select} value={value} onChange={onChangeHandler} disabled={readonly}>
				{optionsList}
			</select>
		</div>
	)
}
