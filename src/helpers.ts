import fs from 'fs';

/**
 * List files in given dirctory.
 * @param {String} location Name of the file path.
 * @param {String} filePrefix Prefix of the file path.
 * @return {Array<String>} Absolute path to the converted file
 * @throws
 */
export function listFiles(location: string, filePrefix: string): Array<string> {
  return fs.readdirSync(location).map(item => `${filePrefix}/${item}`);
}

/**
 * Convert console.table output to object.
 * @param {String} output Console.table output.
 * @return {Array<{[key: string]: string}> | null} Output
 * @return {Array<String>} output skipWords
 * @throws
 */
export function parseTable(
  output: string,
  skipWords: Array<string> = []
): Array<{[key: string]: string}> | null {
  skipWords = ['warning', 'error', ...skipWords];
  const skipWorldsExp = new RegExp(skipWords.join('|'));

  const [keys, ...values] = output
    .split('\n')
    .map((str: string) => str.replace(/[^a-zA-Z0-9 ]/g, ''))
    .filter((str: string) => str.trim() && !skipWorldsExp.test(str.toLowerCase()));

  if (!keys || !values) {
    return null;
  }

  const keyValues: Array<string> = keys.split(' ').filter(Boolean);

  return values
    .map((str: string) => str.split(' ').filter(Boolean))
    .map((items: Array<string>) => {
      return items.reduce((reducer: {[key: string]: string}, item: string, index: number): {
        [key: string]: string;
      } => {
        if (keyValues[index]) {
          reducer[keyValues[index]] = item;
        }

        return reducer;
      }, {});
    });
}
