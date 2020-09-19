/**
 * Parses a style string & returns an object with each style
 * @example
 * $styles__obj('position: absolute; left: 5px;') // returns {position: 'absolute, left: '5px'}
 */
export function _styles_o(str__style) {
	const style_str_a1 = (str__style || '').split(/ *; */)
	const styles_o = {}
	for (let i = 0; i < style_str_a1.length; i++) {
		const i_style_str = style_str_a1[i]
		if (!i_style_str) continue
		const [style_name, style_value] = i_style_str.split(/ *: */)
		styles_o[style_name] = style_value
	}
	return styles_o
}
export const _OBJ__styles = _styles_o
