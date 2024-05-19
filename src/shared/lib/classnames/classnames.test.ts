import { cn } from 'shared/lib/classnames/classnames'

describe('classNames', () => {
	test('with only first param', () => {
		expect(cn('someClass')).toBe('someClass')
	})

	test('with additional class', () => {
		const expectResult = 'someClass class1 class2'
		expect(cn('someClass', {}, ['class1', 'class2'])).toBe(expectResult)
	})

	test('with mods', () => {
		const expectResult = 'someClass class1 class2 hovered scrollable'
		expect(cn('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expectResult)
	})

	test('with mods false', () => {
		const expectResult = 'someClass class1 class2 hovered'
		expect(cn('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expectResult)
	})

	test('with mods undefined', () => {
		const expectResult = 'someClass class1 class2 hovered'
		expect(cn('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expectResult)
	})
})
