/**
 * Returns class html attribute from obj
 * @example
 * _class({class_1: true, class_2: false, class_3: true}) // returns 'class_1 class_3'
 */
export function _class(obj, ...class_a1) {
    const a1 = [];
    a1.push(...class_a1);
    for (let key in obj) {
        if (obj[key])
            a1.push(key);
    }
    return a1.join(' ');
}
