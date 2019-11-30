import {existsSync} from 'fs';
import {SpawnSyncReturns, spawnSync} from 'child_process';

/**
 * Default working diractory
 */
const defaultCwd = '/tmp';

/**
 * Execute binany commands
 * @param {String} command
 * @param {Array<string>} params
 * @param {Array<string>} options
 * @return {String}
 * @throw
 */
export function execute(
  command: string,
  params: Array<string> = [],
  options: Array<string> = [],
  cwd: string = defaultCwd
): string {
  if (cwd !== defaultCwd) {
    if (!existsSync(cwd)) {
      const {error}: SpawnSyncReturns<string> = spawnSync('mkdir', [cwd, '-p']);

      if (error) {
        throw error;
      }
    }
  }

  const {output, error}: SpawnSyncReturns<Buffer> = spawnSync(command, params.concat(options), {
    cwd
  });

  if (output) {
    return output.toString();
  }

  throw error;
}
