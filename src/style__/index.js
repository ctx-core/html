import { style_ } from '../style_/index.js'
/**
 * @param {import('../_types').attr_def_T}memo_style_def_a
 * @returns {(...style_def_a:string[])=>string}
 * @private
 */
export function style__(memo_style_def_a) {
	return (...style_a)=>style_(memo_style_def_a, ...style_a)
}
export {
	style__ as style_2,
}
