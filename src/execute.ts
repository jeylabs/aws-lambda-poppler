import { existsSync } from 'fs';
import { execSync } from 'child_process';

/**
 * Execute binany commands
 * @param {string} command 
 * @return {string} 
 * @throw
 */
export function execute(command: string, cwd: string = null): string  {
    const commands: Array<string> = [command];

    // Make sure working diractory availble to use
    if(!existsSync(cwd)) {
        execSync(`mkdir -p ${cwd}`);
    }
    
    if(!process.env.LD_LIBRARY_PATH) {
        commands.unshift('LD_LIBRARY_PATH="/opt/lib64:/opt/lib"');
    }
    
    if(cwd) {
        commands.unshift(`cd ${cwd}`);
    }

    try {
        return execSync(commands.join(' && ')).toString('utf8');
    } catch(error) {
        throw new Error(error.toString('utf8'));
    }
}

/**
 * Create parameters
 * @param {string} command 
 * @return {string}
 */
export function createParams(parameters: Array<string>): string {
    return parameters.filter(Boolean).join(' ');
}