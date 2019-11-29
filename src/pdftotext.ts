import { execute, createParams } from "./execute";

/**
 * Text converter settings
 */
type Settings = {
    root?: string,
    outputFile?: string,
    options?: string,
};

/**
 * Portable Document Format (PDF) to text converter
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdftotext settings
 * @return {String} Absolute path to the converted file
 * @throws
 */
export function useText(filename: string, settings: Settings = {}): string {
    const outputFile = settings.outputFile || filename.replace('pdf', 'txt');

    execute(`pdftotext ${createParams([
        filename,
        outputFile,
        settings.options
    ])}`, settings.root);

    return outputFile;
}
