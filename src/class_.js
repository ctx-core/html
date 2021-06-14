/**
 * Returns class html attribute from obj
 * @example
 * class_({class_1: true, class_2: false, class_3: true}) // returns 'class_1 class_3'
 */
export function class_(obj, ...class_a) {
    const a = [];
    a.push(...class_a);
    for (let key in obj) {
        if (obj[key])
            a.push(key);
    }
    return a.join(' ');
}
export { class_ as _class, };
//# sourceMappingURL=src/class_.js.map