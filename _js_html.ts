/**
 * html for js script tags
 */
export function _js_html(opts: _js_html_opts_type) {
	const indentation = opts.indentation ?? ''
	const script = opts.script || opts.js || []
	let js_html_a1 = [] as string[]
	for (let i = 0; i < script.length; i++) {
		const jsFile = script[i]
		js_html_a1.push(
			`${indentation}<script type="text/javascript" src="${jsFile}"></script>`
		)
	}
	return js_html_a1.join('\n')
}
export const _html__js = _js_html
export interface _js_html_opts_type {
	js:string[]
	script:string[]
	indentation:string
}
