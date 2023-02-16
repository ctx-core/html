/**
 * Returns class style attribute from obj
 * @param obj{Record<string, any>}
 * @param style_a{string[]}
 * @returns {string}
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function style_(obj, ...style_a) {
	const a = []
	a.push(...style_a)
	for (let key in obj) {
		const value = obj[key]
		a.push(`${key}: ${value};`)
	}
	return a.join(' ')
}
export { style_ as _style, }
