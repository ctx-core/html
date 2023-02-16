import { style_ } from '../style_/index.js'
/**
 * @param r{Record<string, any>}
 * @returns {(...style_a:string[])=>string}
 * @private
 */
export function style__(r) {
	return (...style_a)=>style_(r, ...style_a)
}
export {
	style__ as style_2,
}
