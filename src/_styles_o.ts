/**
 * Parses a style string & returns an object with each style
 * @example
 * $styles__obj('position: absolute; left: 5px;') // returns {position: 'absolute, left: '5px'}
 */
export function _styles_o(style_str:string) {
	const style_str_a1 = (style_str || '').split(/ *; */)
	const styles_o:Record<string, string> = {}
	for (let i = 0; i < style_str_a1.length; i++) {
		const i_style_str = style_str_a1[i]
		if (!i_style_str) continue
		const [style_name, style_value] = i_style_str.split(/ *: */)
		styles_o[style_name] = style_value
	}
	return styles_o
}
export { _styles_o as _OBJ__styles }
