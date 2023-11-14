/**
 * html for js script tags
 * @param {import('./index.d.ts').js_html__params_T}params
 * @returns {string}
 */
export function js_html_(params) {
	const indentation = params.indentation ?? ''
	const script = params.script || params.js || []
	let js_html_a = []
	for (let i = 0; i < script.length; i++) {
		const js_file = script[i]
		js_html_a.push(
			`${indentation}<script type="text/javascript" src="${js_file}"></script>`)
	}
	return js_html_a.join('\n')
}
export {
	js_html_ as _js_html,
	js_html_ as _html__js,
}
