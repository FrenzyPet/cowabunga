import { FC, useCallback } from 'react'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'

import s from './code.module.scss'

interface ICodeProps {
	className?: string
	text: string
}

export const Code: FC<ICodeProps> = ({ className, text }) => {
	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text)
	}, [text])

	return (
		<pre className={cn(s.code, {}, [className])}>
			<Button className={s.copyButton} theme={ButtonTheme.CLEAR} onClick={onCopy}>
				<Icon Svg={CopyIcon} />
			</Button>

			<code>{text}</code>
		</pre>
	)
}
