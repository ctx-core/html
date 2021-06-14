/**
 * Returns class style attribute from obj
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function style_(obj, ...style_a) {
    const a = [];
    a.push(...style_a);
    for (let key in obj) {
        const value = obj[key];
        a.push(`${key}: ${value};`);
    }
    return a.join(' ');
}
export { style_ as _style, };
//# sourceMappingURL=src/style_.js.map