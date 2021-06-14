/**
 * Parses a style string & returns an object with each style
 * @example
 * $styles__obj('position: absolute; left: 5px;') // returns {position: 'absolute, left: '5px'}
 */
export declare function styles_o_(style_str: string): Record<string, string>;
export { styles_o_ as _styles_o, styles_o_ as _OBJ__styles, };
