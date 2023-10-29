import inquirer from "inquirer";
let todo = [];
async function createtodo(arr) {
    do {
        let ans = await inquirer.prompt({
            message: "Select an operation",
            type: "list",
            name: "select",
            choices: ["add", "update", "delete", "view", "exit"]
        });
        if (ans.select == "add") {
            let addtodo = await inquirer.prompt({
                message: "add item...",
                type: "input",
                name: "todo",
            });
            todo.push(addtodo.todo);
            console.log(todo);
        }
        if (ans.select == "update") {
            let updatetodo = await inquirer.prompt([{
                    message: "select item",
                    type: "list",
                    choices: todo.map(item => item),
                    name: "utodo"
                }]);
            let addtodo = await inquirer.prompt({
                message: "add item...",
                type: "input",
                name: "todo",
            });
            let newtodos = todo.filter(val => val !== updatetodo.utodo);
            todo = [...newtodos, addtodo.todo];
            console.log(todo);
        }
        if (ans.select == "delete") {
            let deletetodo = await inquirer.prompt([{
                    message: "select item",
                    type: "list",
                    choices: todo.map(item => item),
                    name: "dtodo"
                }]);
            let newtodos = todo.filter(val => val !== deletetodo.dtodo);
            todo = [...newtodos];
            console.log(todo);
        }
        if (ans.select == "view") {
            console.log(todo);
        }
        if (ans.select == "exit") {
            return;
        }
    } while (true);
}
createtodo(todo);