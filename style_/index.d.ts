import type { attr_def_T } from '../_types/index.js'
/**
 * Returns class style attribute from obj
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export declare function style_(...style_def_a:attr_def_T[]):string
export { style_ as _style, }
