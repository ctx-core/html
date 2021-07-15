import { assign } from '@ctx-core/object'
import { styles_o_ } from './styles_o_.js'
import { style_ } from './style_.js'
/**
 * Assigns additional styles to the style attribute on the HTMLElement el.
 */
export function assign_style(el:HTMLElement, styles:Record<string, string|number>) {
	const el_style = el.getAttribute('style') || ''
	const styles_o = styles_o_(el_style)
	el.setAttribute(
		'style',
		style_(assign(styles_o, styles))
	)
	return el
}
export { assign_style as assign__style }
