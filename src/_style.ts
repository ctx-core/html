/**
 * Returns class style attribute from obj
 * @example
 * _style({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function _style(obj:Record<string, any>, ...style_a1:string[]) {
	const a1 = [] as string[]
	a1.push(...style_a1)
	for (let key in obj) {
		const value = obj[key]
		a1.push(`${key}: ${value};`)
	}
	return a1.join(' ')
}
