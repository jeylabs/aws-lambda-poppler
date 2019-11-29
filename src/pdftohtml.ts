import fs from 'fs';
import { execute, createParams } from "./execute";

/**
 * PPM settings type
 */
type Settings = {
    root: string,
    options?: string,
};

/**
 * Default PPM settings
 */
const defaultSettings: Settings = {
    root: '/tmp',
};

/**
 * Portable Document Format (PDF) to html, xml and png images
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdftohtml settings
 * @return {Array<String>} Absolute path to the converted file
 * @throws
 */
export function useHTML(filename: string, settings: Settings): Array<string> {
    settings = Object.assign(defaultSettings, settings);

    const filePrefix = filename.split('.')[0];
    const fileLocation = `${settings.root}/${filename}`;
    const outputLocation = `${settings.root}/${filePrefix}`;

    execute(`pdftohtml ${createParams([
        fileLocation,
        settings.options
    ])}`, outputLocation);

    return fs.readdirSync(outputLocation).map(item => `${filePrefix}/${item}`);
}