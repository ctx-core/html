/**
 * html for js script tags
 */
export function js_html_(opts: js_html__opts_T) {
	const indentation = opts.indentation ?? ''
	const script = opts.script || opts.js || []
	let js_html_a = [] as string[]
	for (let i = 0; i < script.length; i++) {
		const js_file = script[i]
		js_html_a.push(
			`${indentation}<script type="text/javascript" src="${js_file}"></script>`
		)
	}
	return js_html_a.join('\n')
}
export interface js_html__opts_T {
	js:string[]
	script:string[]
	indentation:string
}
export {
	js_html_ as _js_html,
	js_html_ as _html__js,
}
