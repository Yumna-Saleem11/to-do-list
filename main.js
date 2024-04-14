#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "what you want to add in your todos?",
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more?",
            default: "false"
        },
        {
            name: 'shopping',
            type: 'input',
            message: 'what do you want to buy for eid'
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore.shopping;
    console.log(todos);
}
