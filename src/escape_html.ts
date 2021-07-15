export function escape_html(unsafe_html:string):string {
	return unsafe_html
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')
}
export { escape_html as escape__html }
