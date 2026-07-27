import prompts from "prompts";
export async function promptLanguage(){

const response=await prompts({
    type:"select",
    name:"language",
    message:"select language",
    initial:0,

    choices:[
        {
            title:"Typescript",
            value:"ts",
        },
        {
            title:"Javascript",
            value:"js",
        },
    ]
});
return response.language;
}