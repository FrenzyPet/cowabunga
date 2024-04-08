type Mods = Record<string, boolean | string>

export const cn = (
	cls: string,
	mods: Mods = {},
	additional: string[] = []
): string =>
	[
		cls,
		...additional.filter(Boolean),
		Object.entries(mods)
			.filter(([_, value]) => !!value)
			.map(([className]) => className),
	].join(' ')
