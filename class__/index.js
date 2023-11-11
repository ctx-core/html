import { class_ } from '../class_/index.js'
/** @typedef {import('../_types/index.d.ts').attr_def_T}attr_def_T */
/**
 * @param {attr_def_T}memo_class_def_a
 * @returns {(...class_def_a:attr_def_T[])=>string}
 */
export function class__(...memo_class_def_a) {
	return (...class_def_a)=>class_(...memo_class_def_a, ...class_def_a)
}
export {
	class__ as class_2,
}
