import fs from 'fs-extra';
import path from 'path';
import { createSpinner } from '../utils/ui.js';

export async function createProject(config){
    const spinner=createSpinner('Creating Project').start();
    try{
        config.targetDir=path.join(process.cwd(),config.projectName);
        await fs.mkdirp(config.targetDir);
        spinner.succeed('project created successfully');
    }catch(error){
        spinner.fail("Unable to create Project directory");
        throw error;
    }
}
