/**
 * @param {Record<string, any>}dataset
 * @returns {Record<string, any>}
 * @private
 */
export function dataset__data_attrs_(dataset) {
  return Object.entries(dataset).reduce((o, [key, value])=>{
		o[`data-${key}`] = value
		return o
	}, {})
}