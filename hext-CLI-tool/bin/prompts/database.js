import prompts from "prompts";


//it will retrun repsonse like{
// database:"mongodb,mysqp etc"
//}
export async function promptDatabase(){
const response=await prompts({
    type:"select",
    name:"database",
    message:"choose database",
    initial:0,
    choices:[
        {
            title:"None",
            value:"none",
        },
        {
            title:"MongoDB",
            value:"mongodb",
        },
        {
            title:"postgreSQL",
            value:"postgresql",
        },
        {
            title:"MySQL",
            value:"mysql",
        }
    ]
});
return response.database ?? "none";
}