import {execute} from './execute';
import {parseTable} from './helpers';

/**
 * PDFFonts document information extractor
 */
type Settings = {
  root?: string;
  outputString?: boolean;
  options?: Array<string>;
};

/**
 *  Get used fonts list of given pdf.
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdfinfo settings
 * @return {Array<{[key: string]: string}> | string | null} Absolute path to the converted file
 */
export function useFonts(
  filename: string,
  settings: Settings = {}
): Array<{[key: string]: string}> | string | null {
  const fonts: string = execute('pdffonts', [filename], settings.options, settings.root);

  if (settings.outputString) {
    return fonts;
  }

  return parseTable(fonts);
}
