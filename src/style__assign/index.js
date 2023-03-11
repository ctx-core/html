import { style_ } from '../style_/index.js'
import { styles_o_ } from '../styles_o_/index.js'
/**
 * Assigns additional styles to the style attribute on the HTMLElement el.
 * @param el{HTMLElement}
 * @param {import('../_types').attr_def_T}style_def_a
 * @returns {HTMLElement}
 * */
export function style__assign(el, ...style_def_a) {
	const el_style = el.getAttribute('style') || ''
	const styles_o = styles_o_(el_style)
	el.setAttribute('style', style_(styles_o, ...style_def_a))
	return el
}
export {
	style__assign as assign_style,
	style__assign as assign__style,
}
