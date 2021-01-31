/**
 * html for css link tags
 */
export function _links_html(opts: _links_html_type) {
	const css = opts.css ?? []
	const indentation = opts.indentation ?? ''
	let links_html_a1 = [] as string[]
	for (let i = 0; i < css.length; i++) {
		const cssFile = css[i]
		links_html_a1.push(
			`${indentation}<link rel="stylesheet" type="text/css" href="${cssFile}">`
		)
	}
	return links_html_a1.join('\n')
}
export const _html__links = _links_html
export interface _links_html_type {
	css:string[]
	indentation:string
}
