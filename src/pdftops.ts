import {execute} from './execute';

/**
 * PostScript settings
 */
type Settings = {
  root?: string;
  outputFile?: string;
  options?: Array<string>;
};

/**
 * Converts PDF files to Postscript format.
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdfpdftopstops settings
 * @return {String} Absolute path to the converted file
 * @throws
 */
export function usePostScript(filename: string, settings: Settings = {}): string {
  const outputFile = settings.outputFile || filename.replace('pdf', 'ps');

  execute('pdftops', [filename, outputFile], settings.options, settings.root);

  return outputFile;
}
