import { isArray } from '@ctx-core/function'
const eol_semicolon_regex = /;\s*$/
/**
 * Returns class style attribute from obj
 * @param {import('../_types').attr_def_T}style_def_a
 * @param style_a{string[]}
 * @returns {string}
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function style_(...style_def_a) {
	const a = []
	for (let i = 0; i < style_def_a.length; i++) {
		const style_def = style_def_a[i]
		if (typeof style_def === 'string') {
			a.push(semicolon__style_(style_def))
		} else if (isArray(style_def)) {
			a.push(...style_def.map($=>semicolon__style_($)))
		} else if (typeof style_def === 'object') {
			for (let key in style_def) {
				const val = style_def[key]
				if (val != null) a.push(`${key}: ${val};`)
			}
		}
	}
	return a.join(' ')
}
export { style_ as _style, }
/**
 * @param {string}style
 * @returns {string}
 * @private
 */
function semicolon__style_(style) {
	return (
		eol_semicolon_regex.test(style)
		? style
		: `${style};`
	)
}
