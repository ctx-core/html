import { class_ } from '../class_/index.js'
/**
 * @param r{Record<string, any>}
 * @returns {(...class_a:string[])=>string}
 */
export function class__(r) {
	return (...class_a)=>class_(r, ...class_a)
}
export {
	class__ as class_2,
}
