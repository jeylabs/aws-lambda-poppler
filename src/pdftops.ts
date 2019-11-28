import { execute, createParams } from "./execute";

/**
 * PostScript settings
 */
type Settings = {
    root: string,
    outputFile?: string,
    params?: string,
};

/**
 * PostScript default settings
 */
const defaultSettings: Settings = {
    root: '/tmp',
};

/**
 * Portable Document Format (PDF) to PostScript converter
 * @param {string} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdfpdftopstops settings
 * @return {string} Absolute path to the converted file
 * @throws
 */
export function usePostScript(filename: string, settings: Settings): string {
    settings = Object.assign(defaultSettings, settings);
    const outputFile = settings.outputFile || filename.replace('pdf', 'ps');

    execute(`pdftops ${createParams([
        filename,
        outputFile,
        settings.params
    ])}`, settings.root);

    return outputFile;
}