import { profile } from 'console'
import { getProfileData } from 'entities/profile/model/selectors/get-profile-data/get-profile-data'
import { getProfileError } from 'entities/profile/model/selectors/get-profile-error/get-profile-error'
import { getProfileLoading } from 'entities/profile/model/selectors/get-profile-loading/get-profile-loading'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { Text } from 'shared/ui/text'

import s from './profile-card.module.scss'

interface IProfileCardProps {
	className?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
	const data = useSelector(getProfileData)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileLoading)

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
