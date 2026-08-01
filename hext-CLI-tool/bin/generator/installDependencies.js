//spawnSync is used to run command in terminal ex npm install etc
import { spawnSync } from "child_process";
import { getInstallCommand } from "../utils/packageManager";
import { createSpinner,showInstallError } from "../utils/ui";


export async function installDependencies(config){
    const spinner=createSpinner('installing dependencies');
    try{
        const {command,args}=getInstallCommand(config.packageManager);
        spinner.succeed("Dependencies install successfully");
        spinner.stop();

        const result=spawnSync(command,args,{
            cwd:config.targetDir,
            stdio:"inherit",
            shell:true,
        });
        if(result.status!==0){
            throw new Error();
        }
        spinner.succed("Dependencies Installed");
    }catch(error){
        spinner.fail('Dependency installation failed');
        console.log(error);
        showInstallError(config);
        throw error;
    }
}