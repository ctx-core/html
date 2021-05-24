/**
 * html for js script tags
 */
export function _js_html(opts) {
    var _a;
    const indentation = (_a = opts.indentation) !== null && _a !== void 0 ? _a : '';
    const script = opts.script || opts.js || [];
    let js_html_a1 = [];
    for (let i = 0; i < script.length; i++) {
        const jsFile = script[i];
        js_html_a1.push(`${indentation}<script type="text/javascript" src="${jsFile}"></script>`);
    }
    return js_html_a1.join('\n');
}
export const _html__js = _js_html;
