/**
 * Returns a string of escaped html
 */
export function html_(unsafe) {
	return (
		unsafe
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
	)
}
export { html_ as _html, }
