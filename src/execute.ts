import { existsSync } from 'fs';
import { spawnSync, SpawnSyncReturns } from 'child_process';

/**
 * Default working diractory
 */
const defaultCwd: string = '/tmp';

/**
 * Execute binany commands
 * @param {String} command 
 * @param {Array} params 
 * @return {String}
 * @throw
 */
export function execute(command: string, params: Array<string> = [], cwd: string = defaultCwd): string {
    if (cwd !== defaultCwd) {
        if (!existsSync(cwd)) {
            const { error }: SpawnSyncReturns<string> = spawnSync('mkdir', [cwd, '-p']);
            if (error) {
                throw error;
            }
        }
    }

    const { output, error }: SpawnSyncReturns<Buffer> = spawnSync(command, params, { cwd });
    if (output) {
        return output.toString();
    }

    throw error;
}
