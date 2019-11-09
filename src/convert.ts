import { execSync } from 'child_process';
import { convertedFiles } from "./files";

/**
 * Convert settings type
 */
export type Settings = {
    root: String,
    type: String,
    prefix: String,
};

/**
 * Default settings
 */
export const defaultSettings: Settings = {
    root: '/tmp',
    type: 'png',
    prefix: 'page'
};

/**
 * Converts a file in /tmp to the desired file format
 * @param {String} filename Name of the file to convert located in /tmp directory
 * @param {Settings} settings Convert settings incoming file to
 * @return {Promise<Array<String>>} Absolute path to the converted file
 */
export function convert(filename: string, settings: Settings = defaultSettings): Promise<Array<string>> {

    const fileLocation = `${settings.root}/${filename}`;
    const outputLocation = fileLocation.split('.').slice(0, -1).join('.');

    try {
        execSync(`mkdir -p ${outputLocation}`);
    } catch (error) {
        throw new Error(error.toString("utf8"));
    }

    const commands = [
        `cd ${outputLocation}`,
        'LD_LIBRARY_PATH="/opt/lib64:/opt/lib"',
        `pdftoppm -${settings.type} ${fileLocation} ${settings.prefix}`
    ];

    try {
        execSync(commands.join(' && '));
    } catch (error) {
        throw new Error(error.toString("utf8"));
    }

    return convertedFiles(outputLocation);
}