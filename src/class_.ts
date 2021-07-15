/**
 * Returns class html attribute from r
 * @example
 * class_({class_1: true, class_2: false, class_3: true}) // returns 'class_1 class_3'
 */
export function class_(r:Record<string, any>, ...class_a:string[]):string {
	const a = [] as string[]
	a.push(...class_a)
	for (let key in r) {
		if (r[key]) a.push(key)
	}
	return a.join(' ')
}
export {
	class_ as _class,
}
