#!/usr/bin/env node
import prompts from 'prompts';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync} from 'child_process';

const _fileName=fileURLToPath(import.meta.url);
const _dirname=path.dirname(_fileName);

async function main(){
    const response=await prompts([
        {
            type:"select",
            name:"language",
            message:"Select language",
            choices:[
                {title:"Typescript",value:"ts"},
                {title:"Javascript",value:"js"}
            ]
        },
        {
            type:"text",
            name:"projectName",
            message:"Project name",
            initial:"my-app"
        },
    ]);
    const {language,projectName}=response;
    const projectNameTrimmed=projectName.trim();
    const targetDir=path.join(process.cwd(),projectNameTrimmed);
    await fs.mkdir(targetDir);
    const templateDir=path.join(_dirname,"..","templates",language);
    await fs.copy(templateDir,targetDir);

    //git ignore path
    const gitignorePath = path.join(targetDir, "gitignore");
   const dotGitignorePath = path.join(targetDir, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    await fs.rename(gitignorePath, dotGitignorePath);
  }
  console.log("\nProject created successfully.");
  console.log("Installing dependencies...\n");

    try{
        execSync("npm install",{stdio:"inherit",cwd:targetDir});
        console.log("installing dependencies../");
    }catch(err){
        console.log("fail to run npm install");
    }

    console.log(`\nNext steps:`);
    console.log(`cd ${projectName}`);
    console.log(`npm run dev`);
}


main();