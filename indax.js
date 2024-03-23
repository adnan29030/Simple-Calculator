#! /usr/bin/env node
import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    {
        message: " put your first value",
        type: "number",
        name: "firstvalue"
    },
    {
        message: " put your second value",
        type: "number",
        name: "secondvalue"
    },
    {
        message: " Select your operator for performing program",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (calculator.operator === "addition") {
    console.log(calculator.firstvalue + calculator.secondvalue);
}
else if (calculator.operator === "subtraction") {
    console.log(calculator.firstvalue - calculator.secondvalue);
}
else if (calculator.operator === "multiplication") {
    console.log(calculator.firstvalue * calculator.secondvalue);
}
else if (calculator.operator === "division") {
    console.log(calculator.firstvalue / calculator.secondvalue);
}
