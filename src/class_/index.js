import { isArray } from '@ctx-core/function'
/**
 * Returns class html attribute from r
 * @param {import('../_types').attr_def_T}class_def_a
 * @returns {string}
 * @example
 * class_({class_1: true, class__: false, class_3: true}) // returns 'class_1 class_3'
 */
export function class_(...class_def_a) {
	const a = []
	for (let i = 0; i < class_def_a.length; i++) {
		const class_def = class_def_a[i]
		if (typeof class_def === 'string') {
			a.push(class_def)
		} else if (isArray(class_def)) {
			a.push(...class_def)
		} else if (typeof class_def === 'object') {
			for (let key in class_def) {
				if (class_def[key]) a.push(key)
			}
		}
	}
	return a.join(' ')
}
export { class_ as _class, }
