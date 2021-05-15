/**
 * Returns class html attribute from obj
 * @example
 * _class({class_1: true, class_2: false, class_3: true}) // returns 'class_1 class_3'
 */
export function _class(obj:Record<string, any>, ...class_a1:string[]) {
	const a1 = [] as string[]
	a1.push(...class_a1)
	for (let key in obj) {
		if (obj[key]) a1.push(key)
	}
	return a1.join(' ')
}
