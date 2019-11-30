import fs from 'fs';
import { execute } from "./execute";

/**
 * PPM settings type
 */
type Settings = {
    root: string,
    prefix: string,
    options?: Array<string>,
};

/**
 * Default PPM settings
 */
const defaultSettings: Settings = {
    root: '/tmp',
    prefix: 'page',
    options: ['-png'],
};

/**
 * Portable Document Format (PDF) to Portable Pixmap (PPM) converter
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

    execute('pdftoppm', [fileLocation, settings.prefix, ...settings.options], outputLocation);
    return fs.readdirSync(outputLocation).map(item => `${filePrefix}/${item}`);
}