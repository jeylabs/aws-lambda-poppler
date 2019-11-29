import { execute, createParams } from "./execute";

/**
 * PostScript settings
 */
type Settings = {
    root?: string,
    outputFile?: string,
    params?: string,
};

/**
 * Portable Document Format (PDF) to PostScript converter
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdfpdftopstops settings
 * @return {String} Absolute path to the converted file
 * @throws
 */
export function usePostScript(filename: string, settings: Settings = {}): string {
    const outputFile = settings.outputFile || filename.replace('pdf', 'ps');

    execute(`pdftops ${createParams([
        filename,
        outputFile,
        settings.params
    ])}`, settings.root);

    return outputFile;
}