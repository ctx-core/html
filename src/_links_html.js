/**
 * html for css link tags
 */
export function _links_html(opts) {
    var _a, _b;
    const css = (_a = opts.css) !== null && _a !== void 0 ? _a : [];
    const indentation = (_b = opts.indentation) !== null && _b !== void 0 ? _b : '';
    let links_html_a1 = [];
    for (let i = 0; i < css.length; i++) {
        const cssFile = css[i];
        links_html_a1.push(`${indentation}<link rel="stylesheet" type="text/css" href="${cssFile}">`);
    }
    return links_html_a1.join('\n');
}
export const _html__links = _links_html;
