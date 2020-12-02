import arg from "arg";
import inquirer from "inquirer";
import { readFile } from "fs/promises";
import textToLang from "./textToLang";

const parseArguments = (rawArgs) => {
  const args = arg(
    {
      "--file": String,
      "-f": "--file",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    file: args["--file"],
  };
};

const questions = [
  {
    type: "list",
    name: "language",
    message: "Choose which language to use",
    choices: [
      "JavaScript",
      "C++",
      "Python 3",
      "Python 2",
      "Java",
      "C#",
      "C",
      "Go",
    ],
    default: "JavaScript",
  },
  {
    type: "confirm",
    name: "minimal",
    message: "Use minimal output?",
    default: true,
  },
];

export async function cli(args) {
  let options = parseArguments(args);
  const answers = await inquirer.prompt(questions);
  options.language = answers.language;
  options.minimal = answers.minimal;
  console.log(
    textToLang(
      (await readFile(options.file)).toString(),
      options.language,
      options.minimal
    )
  );
}
