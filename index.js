#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { name: "firstNumber", type: "number", message: "Enter first number" },
    { name: "secondNumber", type: "number", message: "Enter second number" },
    {
        message: " Kindly select one of the operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Please enter a valid number ! ");
}
