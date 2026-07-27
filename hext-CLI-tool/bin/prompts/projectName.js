import prompts from 'prompts';
import validate from 'validate-npm-package-name';
import { toPackageName } from '../utils/validation';

function toPackageName(){
    return name.trim().toLowerCase().replace(/\s+/g, "-");
}

export async function promptProjectName(){
    const response=await prompts({
        type:"text",
        //the name it returns
        name:"projectName",
        message:"project name",
        initial:"my-app",

        validate(value){
            const trimmed=value.trim();
            if(!trimmed){
                return "project name cannot be empty";
            }
            const packageName=toPackageName(trimmed);
            const result=validate(packageName);
            if(result.validForNewPackages){
                return "please enter a valid npm package name";
            }
            return true;
        }
    });
    const projectName=response.projectName.trim();
    return {
        projectName,    
        packageName:toPackageName(projectName),
    };
}