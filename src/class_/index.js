/**
 * Returns class html attribute from r
 * @param r{Record<string, any>}
 * @param class_a{string[]}
 * @returns {string}
 * @example
 * class_({class_1: true, class__: false, class_3: true}) // returns 'class_1 class_3'
 */
export function class_(r, ...class_a) {
	const a = []
	a.push(...class_a)
	for (let key in r) {
		if (r[key]) a.push(key)
	}
	return a.join(' ')
}
export { class_ as _class, }
