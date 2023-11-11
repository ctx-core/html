import { isArray } from '@ctx-core/function'
import { attr_ } from '../attr_/index.js'
/**
 * Returns a string of attrs for an html element
 * @param {import('../_types/index.js').attr_def_T}attr_def_a
 * @returns {string}
 */
export function attrs_(...attr_def_a) {
	/** @type {string[]} */
	let a = []
	for (let i = 0; i < attr_def_a.length; i++) {
		const attr_def = attr_def_a[i]
		if (typeof attr_def === 'string') {
			a.push(attr_def)
		} else if (isArray(attr_def)) {
			a.push(...attr_def)
		} else if (typeof attr_def === 'object') {
			for (const key in attr_def) {
				const val = attr_def[key]
				if (val != null) {
					a.push(attr_(key, attr_def[key]))
				}
			}
		}
	}
	return a.join(' ')
}
export { attrs_ as _attrs, }
