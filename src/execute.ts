import { existsSync } from 'fs';
import { spawnSync, CommonOptions, SpawnSyncReturns } from 'child_process';

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

    const options: CommonOptions = { cwd };
    if (process.env.AWS_EXECUTION_ENV === 'AWS_Lambda_nodejs8.10') {
        options.env = {
            LD_LIBRARY_PATH: '/opt/lib'
        };
    }

    const { output, error }: SpawnSyncReturns<Buffer> = spawnSync(command, params, options);
    if (output) {
        return output.toString();
    }

    throw error;
}
