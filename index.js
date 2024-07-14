#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
let mainCond = true;
while (mainCond) {
    const whattodo = await inquirer.prompt([
        {
            name: "action",
            message: "Please Select option: ",
            type: "list",
            choices: ["Add Todo", "Delete Todo", "Exit"]
        },
    ]);
    if (whattodo.action === "Exit") {
        mainCond = false;
    }
    if (whattodo.action === "Add Todo") {
        while (condition) {
            const todos = await inquirer.prompt([
                {
                    name: "todo",
                    message: "What do you want to add in your todos: ",
                    type: "input"
                },
                {
                    name: "addmore",
                    message: "Do you want to add more todos?: ",
                    type: "confirm",
                    default: "false"
                },
            ]);
            todolist.push(todos.todo);
            condition = todos.addmore;
        }
    }
    if (whattodo.action === "Delete Todo") {
        if (todolist.length === 0) {
            console.log("Fisrt add todos in Todo List!!");
        }
        else {
            let deleteTodo = todolist.pop();
            console.log(deleteTodo, "has been deleted");
        }
    }
}
console.log("Here is your todo list ", todolist);
