export function html__escape(unsafe_html) {
	return (
		unsafe_html
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
	)
}
export {
	html__escape as escape_html,
	html__escape as escape__html,
}
