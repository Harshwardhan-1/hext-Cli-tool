import prompts from "prompts"
import { detectPackageManager, detectPackageManager } from "../utils/packageManager"

export async function promptPackageManager(){
    const detectPackageManager=detectPackageManager();

   const response=await prompts({
    type:"select",
    name:"packageManager",
    message:"select package manager",
    initial:["npm","yarn","pnpm","bun"].indexOf(detectPackageManager),

    choices:[
        {
            title:detectPackageManager==='npm'
            ?"npm detected"
            :"npm",
            value:"npm"   
        },
        {
            title:detectPackageManager=== "pnpm"
            ?"pnpm detected"
            :"pnpm",
            value:"pnpm",
        },
        {
            title:detectPackageManager=== 'yarn'
            ?"yarn detected"
            :"yarn",
            value:"yarn",
        },
        {
            title:detectPackageManager=== 'bun'
            ?"bun detected"
            :"bun",
            value:"bun",
        }
    ]
  });
  return response.packageManager
}