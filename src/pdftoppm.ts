import {execute} from './execute';
import {listFiles} from './helpers';

/**
 * PPM settings type
 */
type Settings = {
  root: string;
  prefix: string;
  options?: Array<string>;
};

/**
 * Default PPM settings
 */
const defaultSettings: Settings = {
  root: '/tmp',
  prefix: 'page',
  options: ['-png']
};

/**
 * Converts PDF files to PBM, PGM and PPM formats.
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdftoppm settings
 * @return {Array<String>} Absolute path to the converted file
 * @throws
 */
export function usePixmap(filename: string, settings: Settings): Array<string> {
  settings = Object.assign(defaultSettings, settings);

  const filePrefix = filename.split('.')[0];
  const fileLocation = `${settings.root}/${filename}`;
  const outputLocation = `${settings.root}/${filePrefix}`;

  execute('pdftoppm', [fileLocation, settings.prefix], settings.options, outputLocation);

  return listFiles(outputLocation, filePrefix);
}
