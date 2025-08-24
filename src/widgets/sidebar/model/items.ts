import { FunctionComponent, SVGProps } from 'react'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import { RoutePath } from 'shared/config/route-config/route-config'

export interface ISidebarItem {
	path: string
	text: string
	icon: FunctionComponent<SVGProps<SVGSVGElement>>
	authOnly?: boolean
}

export const SidebarItemsList: ISidebarItem[] = [
	{
		path: RoutePath.main,
		icon: MainIcon,
		text: 'Главная',
	},
	{
		path: RoutePath.about,
		icon: AboutIcon,
		text: 'О сайте',
	},
	{
		path: RoutePath.profile,
		icon: ProfileIcon,
		text: 'Профиль',
		authOnly: true,
	},
]
