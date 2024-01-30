
import { transformListItemLikeElementsIntoLists } from "../filters/list.js";
import { replaceImagesSourceWithBase64 } from "../filters/image.js";
import removeMSAttributes from "../filters/removemsattributes.js";
const msWordMatch1 = /<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i;
const msWordMatch2 = /xmlns:o="urn:schemas-microsoft-com/i;
/**
 * Normalizer for the content pasted from Microsoft Word.
 */
export default class MSWordNormalizer {
    /**
     * Creates a new `MSWordNormalizer` instance.
     *
     * @param document View document.
     */
  constructor(document) {
    this.document = document;
  }
    /**
     * @inheritDoc
     */
  isActive(htmlString) {
    return msWordMatch1.test(htmlString) || msWordMatch2.test(htmlString);
  }
    /**
     * @inheritDoc
     */
  execute(data) {
    const { body: documentFragment, stylesString } = data._parsedData;
    transformListItemLikeElementsIntoLists(documentFragment, stylesString);
    replaceImagesSourceWithBase64(documentFragment, data.dataTransfer.getData("text/rtf"));
    removeMSAttributes(documentFragment);
    data.content = documentFragment;
  }
}
