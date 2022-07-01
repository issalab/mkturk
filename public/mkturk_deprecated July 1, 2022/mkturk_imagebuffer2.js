/**
 * @class
 */
export class ImageBuffer {
  constructor() {
    this.cache = {};
    this.numCachedElements = 0;
    this.maxBufferSize = 100;
  }

  /**
   * Get image blob
   * @param {string} filename 
   */
  async getImageByName(filename) {
    try {
      // IF requested image not in buffer (cache), add it and then return
      if (filename in this.cache) {
        return this.cache[filename];
      } else {
        await this.cacheImages(filename);
        return this.cache[filename];
      }
    } catch (error) {
      console.error('[getImageByName] Failed with Error:', error);
    }
  }


  async cacheImage(imgName) {
    
  }


}