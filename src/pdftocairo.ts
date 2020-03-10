import {execute} from './execute';
import {listFiles} from './helpers';

/**
 * Cairo settings type
 */
type Settings = {
  root: string;
  prefix: string;
  options?: Array<string>;
};

/**
 * Default Cairo settings
 */
const defaultSettings: Settings = {
  root: '/tmp',
  prefix: 'page',
  options: ['-png']
};

/**
 * Converts a PDF file to one of several formats (PNG, JPEG, PDF, PS, EPS, SVG) using the cairo output device of the poppler library.
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdftoppm settings
 * @return {Array<String>} Absolute path to the converted file
 * @throws
 */
export function useCairo(filename: string, settings: Settings): Array<string> {
  settings = Object.assign(defaultSettings, settings);

  const filePrefix = filename.split('.')[0];
  const fileLocation = `${settings.root}/${filename}`;
  const outputLocation = `${settings.root}/${filePrefix}`;

  execute('pdftocairo', [fileLocation, settings.prefix], settings.options, outputLocation);

  return listFiles(outputLocation, filePrefix);
}
