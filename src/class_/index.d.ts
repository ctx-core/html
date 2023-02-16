/**
 * Returns class html attribute from r
 * @example
 * class_({class_1: true, class__: false, class_3: true}) // returns 'class_1 class_3'
 */
export declare function class_(r:Record<string, any>, ...class_a:string[]):string
export { class_ as _class, }
