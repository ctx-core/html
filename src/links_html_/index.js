/**
 * html for css link tags
 * @param {import('./index.d.ts').links_html__params_T}params
 * @returns {string}
 */
export function links_html_(params) {
	const css = params.css ?? []
	const indentation = params.indentation ?? ''
	let links_html_a = []
	for (let i = 0; i < css.length; i++) {
		const css_file = css[i]
		links_html_a.push(`${indentation}<link rel="stylesheet" type="text/css" href="${css_file}">`)
	}
	return links_html_a.join('\n')
}
export {
	links_html_ as _links_html,
	links_html_ as _html__links,
}
