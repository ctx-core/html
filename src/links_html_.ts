/**
 * html for css link tags
 */
export function links_html_(opts:links_html__opts_T):string {
	const css = opts.css ?? []
	const indentation = opts.indentation ?? ''
	let links_html_a:string[] = []
	for (let i = 0; i < css.length; i++) {
		const css_file = css[i]
		links_html_a.push(
			`${indentation}<link rel="stylesheet" type="text/css" href="${css_file}">`
		)
	}
	return links_html_a.join('\n')
}
export interface links_html__opts_T {
	css:string[]
	indentation:string
}
export {
	links_html_ as _links_html,
	links_html_ as _html__links,
}
