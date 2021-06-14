/**
 * Returns class html attribute from obj
 * @example
 * class_({class_1: true, class_2: false, class_3: true}) // returns 'class_1 class_3'
 */
export declare function class_(obj: Record<string, any>, ...class_a: string[]): string;
export { class_ as _class, };
