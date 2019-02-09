import getMetaInfo from '../shared/getMetaInfo'
import generateServerInjector from './generateServerInjector'

export default function _inject(options = {}) {
  /**
   * Converts the state of the meta info object such that each item
   * can be compiled to a tag string on the server
   *
   * @this {Object} - Vue instance - ideally the root component
   * @return {Object} - server meta info with `toString` methods
   */

  return function inject() {
    // get meta info with sensible defaults
    const metaInfo = getMetaInfo(options, this.$root)

    // generate server injectors
    for (const key in metaInfo) {
      if (!['titleTemplate', 'titleChunk'].includes(key) && metaInfo.hasOwnProperty(key)) {
        metaInfo[key] = generateServerInjector(options, key, metaInfo[key])
      }
    }

    return metaInfo
  }
}
