import { assign } from '@ctx-core/object'
import { style_ } from '../style_/index.js'
import { styles_o_ } from '../styles_o_/index.js'
/**
 * Assigns additional styles to the style attribute on the HTMLElement el.
 * @param el{HTMLElement}
 * @param styles{Record<string, string|number>}
 * @returns {HTMLElement}
 * */
export function style__assign(el, styles) {
	const el_style = el.getAttribute('style') || ''
	const styles_o = styles_o_(el_style)
	el.setAttribute('style', style_(assign(styles_o, styles)))
	return el
}
export {
	style__assign as assign_style,
	style__assign as assign__style,
}
