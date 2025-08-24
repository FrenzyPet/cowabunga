import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Select } from 'shared/ui/select'

import { Country } from '../../model/types/country'
import s from './country-select.module.scss'

interface ICountrySelectProps {
	className?: string
	value?: Country
	onChange?: (value: Country) => void
	readonly?: boolean
}

const options = Object.values(Country).map((country) => ({
	content: country,
	value: country,
}))

export const CountrySelect: FC<ICountrySelectProps> = (props) => {
	const { className, value, onChange, readonly } = props

	return (
		<Select
			className={cn(s.countrySelect, {}, [className])}
			label='Укажите страну'
			options={options}
			value={value}
			onChange={onChange}
			readonly={readonly}
		/>
	)
}
