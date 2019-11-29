import { existsSync } from 'fs';
import { execSync } from 'child_process';

/**
 * Default working diractory
 */
const defaultCwd: string = '/tmp';

/**
 * Execute binany commands
 * @param {String} command 
 * @return {String}
 * @throw
 */
export function execute(command: string, cwd: string = defaultCwd): string {
    const commands: Array<string> = [command];

    // Make sure working diractory availble to use
    if (cwd !== defaultCwd) {
        if (!existsSync(cwd)) {
            execSync(`mkdir -p ${cwd}`);
        }
    }

    if (!process.env.LD_LIBRARY_PATH) {
        commands.unshift('LD_LIBRARY_PATH="/opt/lib64:/opt/lib"');
    }

    if (cwd) {
        commands.unshift(`cd ${cwd}`);
    }

    try {
        return execSync(commands.join(' && ')).toString('utf8');
    } catch (error) {
        throw new Error(error.toString('utf8'));
    }
}

/**
 * Create parameters
 * @param {String} command 
 * @return {String}
 */
export function createParams(parameters: Array<string>): string {
    return parameters.filter(Boolean).join(' ');
}
