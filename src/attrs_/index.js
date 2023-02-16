import { html_ } from '../html_/index.js'
/**
 * Returns a string of attrs for a html element
 * @param obj{Record<string, string>}
 * @returns {string}
 */
export function attrs_(obj) {
	if (!obj) return '.js'
	let attrs = []
	for (let key in obj) {
		attrs.push(`${key}=${html_(obj[key])}`)
	}
	return attrs.join(' ')
}
export { attrs_ as _attrs, }
