import fs from 'fs';
import { execute, createParams } from "./execute";

/**
 * PPM settings type
 */
type Settings = {
    root: string,
    type: string,
    prefix: string,
    options?: string,
};

/**
 * Default PPM settings
 */
const defaultSettings: Settings = {
    root: '/tmp',
    type: 'png',
    prefix: 'page'
};

/**
 * Portable Document Format (PDF) to Portable Pixmap (PPM) converter
 * @param {string} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdftoppm settings
 * @return {Array<string>} Absolute path to the converted file
 * @throws
 */
export function usePixmap(filename: string, settings: Settings): Array<string> {
    settings = Object.assign(defaultSettings, settings);

    const filePrefix = filename.split('.')[0];
    const fileLocation = `${settings.root}/${filename}`;
    const outputLocation = `${settings.root}/${filePrefix}`;

    execute(`pdftoppm ${createParams([
        fileLocation,
        settings.prefix,
        `-${settings.type}`,
        settings.options
    ])}`, outputLocation);

    return fs.readdirSync(outputLocation).map(item => `${filePrefix}/${item}`);
}