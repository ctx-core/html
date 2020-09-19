import { assign } from '@ctx-core/object'
import { _styles_o } from './_styles_o'
import { _style } from './_style'
/**
 * Assigns additional styles to the style attribute on the HTMLElement el.
 */
export function assign__style(el, styles) {
	const style__el = el.getAttribute('style') || ''
	const styles_o = _styles_o(style__el)
	el.setAttribute(
		'style',
		_style(assign(styles_o, styles))
	)
	return el
}
