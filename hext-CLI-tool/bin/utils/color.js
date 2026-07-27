//to show color in terminal
import chalk from "chalk";

//it gives multiple colors to package like if it is hello hello h->grren ,r->yellow
import gradient from 'gradient-string';

export const colors={
    title:gradient(["#38bdf8", "#06b6d4"]),
    primary:chalk.cyan,
    success:chalk.green,
    warning:chalk.yellow,
    error:chalk.red,
    muted:chalk.gray,
    heading:chalk.bold.white,
}
