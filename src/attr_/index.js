import { html_ } from '../html_/index.js'
/**
 * @param {string}key
 * @param {string}val
 * @returns {string}
 * @private
 */
export function attr_(key, val) {
	return key + '="' + html_(val) + '"'
}
/**
 * @param {string}key
 * @param {string}val
 * @returns {string}
 * @private
 */
export function raw__attr_(key, val) {
	return key + '="' + val + '"'
}
