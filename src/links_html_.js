/**
 * html for css link tags
 */
export function links_html_(opts) {
    var _a, _b;
    const css = (_a = opts.css) !== null && _a !== void 0 ? _a : [];
    const indentation = (_b = opts.indentation) !== null && _b !== void 0 ? _b : '';
    let links_html_a = [];
    for (let i = 0; i < css.length; i++) {
        const css_file = css[i];
        links_html_a.push(`${indentation}<link rel="stylesheet" type="text/css" href="${css_file}">`);
    }
    return links_html_a.join('\n');
}
export { links_html_ as _links_html, links_html_ as _html__links, };
//# sourceMappingURL=src/links_html_.js.map