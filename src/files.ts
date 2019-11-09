import fs from 'fs';
import path from 'path';

/**
 * Absolute path of converted files
 * @param {String} fileLocation Name of the file location to convert located in /tmp directory
 * @return {Promise<Array<String>>} Absolute path to the converted file
 */
export function convertedFiles(fileLocation: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    fs.readdir(fileLocation, (err, files) => {
      if (err) {
        return reject(err);
      }

      if(!files) {
        return reject(`provided folder '${fileLocation}' is empty or does not exist.`);
      }

      const fileLocations = [];
      for (const filename of files) {
        const filepath = path.join(fileLocation, filename);
        if (!fs.lstatSync(filepath).isDirectory()) {
          fileLocations.push(filepath);
        }
      }

      resolve(fileLocations);
    });
  });
}