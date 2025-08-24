import { Country, CountrySelect } from 'entities/country'
import { Currency, CurrencySelect } from 'entities/currency'
import { IProfile } from 'entities/profile/model/types/profile'
import { FC } from 'react'
import { Mods, cn } from 'shared/lib/classnames/classnames'
import { Avatar } from 'shared/ui/avatar'
import { Input } from 'shared/ui/input'
import { Loader } from 'shared/ui/loader'
import { Text } from 'shared/ui/text'
import { TextAlign, TextTheme } from 'shared/ui/text/ui/text'

import s from './profile-card.module.scss'

interface IProfileCardProps {
	className?: string
	data?: IProfile
	isLoading?: boolean
	error?: string
	readonly?: boolean
	onChangeFirstname?: (value?: string) => void
	onChangeLastname?: (value?: string) => void
	onChangeCity?: (value?: string) => void
	onChangeAge?: (value?: string) => void
	onChangeUsername?: (value?: string) => void
	onChangeAvatar?: (value?: string) => void
	onChangeCurrency?: (currency: Currency) => void
	onChangeCountry?: (country: Country) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeCity,
		onChangeAge,
		onChangeAvatar,
		onChangeUsername,
		onChangeCurrency,
		onChangeCountry,
	} = props

	if (isLoading) {
		return (
			<div className={cn(s.profileCard, {}, [className, s.loading])}>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div className={cn(s.profileCard, {}, [className, s.error])}>
				<Text
					theme={TextTheme.ERROR}
					title='Ошибка загрузки профиля'
					text={'Попробуйте обновить страницу'}
					align={TextAlign.CENTER}
				/>
			</div>
		)
	}

	const mods: Mods = {
		[s.edit]: !readonly,
	}

	return (
		<div className={cn(s.profileCard, mods, [className])}>
			<div className={s.data}>
				{data?.avatar && (
					<div className={s.avatarWrapper}>
						<Avatar className={s.avatar} alt='Аватарка' src={data.avatar} size={75} />
					</div>
				)}

				<Input value={data?.first} placeholder='Ваше имя' onChange={onChangeFirstname} readOnly={readonly} />

				<Input value={data?.lastname} placeholder='Ваше фамилия' onChange={onChangeLastname} readOnly={readonly} />

				<Input value={data?.age} placeholder='Ваш возраст' onChange={onChangeAge} readOnly={readonly} />

				<Input value={data?.city} placeholder='Город' onChange={onChangeCity} readOnly={readonly} />

				<Input value={data?.username} placeholder='Имя пользователя' onChange={onChangeUsername} readOnly={readonly} />

				<Input value={data?.avatar} placeholder='Ссылка на аватар' onChange={onChangeAvatar} readOnly={readonly} />

				<CurrencySelect className={s.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />

				<CountrySelect className={s.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
			</div>
		</div>
	)
}
