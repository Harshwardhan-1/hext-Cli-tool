import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { createSpinner } from '../utils/ui.js';


const _filePath=fileURLToPath(import.meta.url);
const _dirname=path.dirname(_filePath);
        

export async function copyTemplate(config){
    try{
        const spinner=createSpinner('copying project template').start();
        const templateDir=path.join(_dirname,"..","..","templates",config.language);
        await fs.copy(templateDir,config.targetdir);        
        spinner.succeed('project template copied');
    }catch(error){
        spinner.fail("failed to copied template");
        throw error;
    }
}