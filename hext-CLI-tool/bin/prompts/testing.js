import prompts from "prompts";

export async function promptTesting(){
    const response=await prompts({
        type:"select",
        name:"testing",
        message:"Testing",
        initial:0,
        choices:[
            {
                title:"None",
                value:"none",
            },
            {
                title:"Jest",
                value:"jest",
            },
            {
                title:"Vitest",
                value:"vitest",
            },
        ],
    });
    return response.testing;
}