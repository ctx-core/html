/**
 * html for js script tags
 */
export function js_html_(opts) {
    var _a;
    const indentation = (_a = opts.indentation) !== null && _a !== void 0 ? _a : '';
    const script = opts.script || opts.js || [];
    let js_html_a = [];
    for (let i = 0; i < script.length; i++) {
        const js_file = script[i];
        js_html_a.push(`${indentation}<script type="text/javascript" src="${js_file}"></script>`);
    }
    return js_html_a.join('\n');
}
export { js_html_ as _js_html, js_html_ as _html__js, };
//# sourceMappingURL=src/js_html_.js.map