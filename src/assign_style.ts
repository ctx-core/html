import { assign } from '@ctx-core/object'
import { _styles_o } from './_styles_o'
import { _style } from './_style'
/**
 * Assigns additional styles to the style attribute on the HTMLElement el.
 */
export function assign_style(el:HTMLElement, styles:Record<string, string|number>) {
	const style__el = el.getAttribute('style') || ''
	const styles_o = _styles_o(style__el)
	el.setAttribute(
		'style',
		_style(assign(styles_o, styles))
	)
	return el
}
export { assign_style as assign__style }
