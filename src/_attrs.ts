import { _html } from './_html'
/**
 * Returns a string of attrs for an html element
 */
export function _attrs(obj: object) {
	if (!obj) return ''
	let attrs = [] as string[]
	for (let key in obj) {
		attrs.push(`${key}=${_html(obj[key])}`)
	}
	return attrs.join(' ')
}
