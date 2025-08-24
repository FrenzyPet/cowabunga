import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Select } from 'shared/ui/select'

import { Currency } from '../../model/types/currency'
import s from './currency-select.module.scss'

interface ICurrencySelectProps {
	className?: string
	value?: Currency
	onChange?: (value: Currency) => void
	readonly?: boolean
}

const options = Object.values(Currency).map((currency) => ({
	content: currency,
	value: currency,
}))

export const CurrencySelect: FC<ICurrencySelectProps> = (props) => {
	const { className, value, onChange, readonly } = props

	return (
		<Select
			className={cn(s.currencySelect, {}, [className])}
			label='Укажите валюту'
			options={options}
			value={value}
			onChange={onChange}
			readonly={readonly}
		/>
	)
}
