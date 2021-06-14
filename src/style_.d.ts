/**
 * Returns class style attribute from obj
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export declare function style_(obj: Record<string, any>, ...style_a: string[]): string;
export { style_ as _style, };
