import { IProfile } from 'entities/profile/model/types/profile'
import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
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
	onChangeFirstname: (value?: string) => void
	onChangeLastname: (value?: string) => void
	onChangeCity: (value?: string) => void
	onChangeAge: (value?: string) => void
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
	return (
		<div className={cn(s.profileCard, {}, [className])}>
			<div className={s.data}>
				<Input value={data?.first} placeholder='Ваше имя' onChange={onChangeFirstname} readOnly={readonly} />

				<Input value={data?.lastname} placeholder='Ваше фамилия' onChange={onChangeLastname} readOnly={readonly} />

				<Input value={data?.age} placeholder='Ваш возраст' onChange={onChangeAge} readOnly={readonly} />

				<Input value={data?.city} placeholder='Город' onChange={onChangeCity} readOnly={readonly} />
			</div>
		</div>
	)
}
