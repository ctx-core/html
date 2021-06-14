import { html_ } from './html_';
/**
 * Returns a string of attrs for an html element
 */
export function attrs_(obj) {
    if (!obj)
        return '';
    let attrs = [];
    for (let key in obj) {
        attrs.push(`${key}=${html_(obj[key])}`);
    }
    return attrs.join(' ');
}
export { attrs_ as _attrs, };
//# sourceMappingURL=src/attrs_.js.map