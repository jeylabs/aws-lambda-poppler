import { execute, createParams } from "./execute";

/**
 * PDFInfo document information extractor
 */
type Settings = {
    root?: string,
    outputString?: boolean,
    options?: string,
};

/**
 *  Portable Document Format (PDF) document information extractor
 * @param {String} filename Name of the file to convert located in root directory
 * @param {Settings} settings pdfinfo settings
 * @return {Object | String} Absolute path to the converted file
 */
export function useInfo(filename: string, settings: Settings = {}): any {
    const info = execute(`pdfinfo ${createParams([
        filename,
        settings.options
    ])}`, settings.root);

    if (settings.outputString) {
        return info;
    }

    return info.split('\n').filter(Boolean).reduce((reducer: any, item: string) => {
        const [key, value]: Array<string> = item.split(':');
        if (key) {
            reducer[key] = value ? value.trim() : null;
        }
        return reducer;
    }, {});
}