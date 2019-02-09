import { titleGenerator, attributeGenerator, tagGenerator } from './generators'

/**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */

export default function generateServerInjector(options, type, data) {
  if (type === 'title') {
    return titleGenerator(options, type, data)
  }

  if (['htmlAttrs', 'headAttrs', 'bodyAttrs'].includes(type)) {
    return attributeGenerator(options, type, data)
  }

  return tagGenerator(options, type, data)
}
