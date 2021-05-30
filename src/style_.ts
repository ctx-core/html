/**
 * Returns class style attribute from obj
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function style_(obj:Record<string, any>, ...style_a1:string[]) {
	const a = [] as string[]
	a.push(...style_a1)
	for (let key in obj) {
		const value = obj[key]
		a.push(`${key}: ${value};`)
	}
	return a.join(' ')
}
export {
	style_ as _style,
}
