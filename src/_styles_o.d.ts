/**
 * Parses a style string & returns an object with each style
 * @example
 * $styles__obj('position: absolute; left: 5px;') // returns {position: 'absolute, left: '5px'}
 */
export declare function _styles_o(style_str: string): Record<string, string>;
export { _styles_o as _OBJ__styles };
