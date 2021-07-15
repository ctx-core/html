import { html_ } from './html_'
/**
 * Returns a string of attrs for an html element
 */
export function attrs_(obj:Record<string, string>):string {
	if (!obj) return '.js'
	let attrs = [] as string[]
	for (let key in obj) {
		attrs.push(`${key}=${html_(obj[key])}`)
	}
	return attrs.join(' ')
}
export {
	attrs_ as _attrs,
}
