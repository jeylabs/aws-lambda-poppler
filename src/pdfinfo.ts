import {execute} from './execute';

/**
 * PDFInfo document information extractor
 */
type Settings = {
  root?: string;
  outputString?: boolean;
  options?: Array<string>;
};

/**
 *  Prints the contents of the 'Info' dictionary (plus some other useful information) from a PDF file.
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdfinfo settings
 * @return {Object | String} Absolute path to the converted file
 */
export function useInfo(filename: string, settings: Settings = {}): any {
  const info = execute('pdfinfo', [filename], settings.options, settings.root);

  if (settings.outputString) {
    return info;
  }

  return info
    .split('\n')
    .filter(Boolean)
    .reduce((reducer: any, item: string) => {
      const [key, value]: Array<string> = item.split(':');

      if (key) {
        reducer[key] = value ? value.trim() : null;
      }

      return reducer;
    }, {});
}
