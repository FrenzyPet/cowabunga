import { IProfile } from 'entities/profile/model/types/profile'
import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'
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
}

export const ProfileCard: FC<IProfileCardProps> = ({ className, data, isLoading, error }) => {
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
			<div className={s.header}>
				<Text title='Профиль' />

				<Button theme={ButtonTheme.OUTLINE} className={s.button}>
					Редактировать
				</Button>
			</div>

			<div className={s.data}>
				<Input value={data?.first} placeholder='Ваше имя' />
				<Input value={data?.lastname} placeholder='Ваше фамилия' />
			</div>
		</div>
	)
}
