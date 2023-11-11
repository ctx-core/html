import type { attr_def_T } from '../_types/index.js'
/**
 * Returns class html attribute from r
 * @example
 * class_({class_1: true, class__: false, class_3: true}) // returns 'class_1 class_3'
 */
export declare function class_(...class_def_a:attr_def_T[]):string
export { class_ as _class, }
