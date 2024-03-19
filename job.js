import inquirer from "inquirer";
const jobApp = await inquirer.prompt([
    {
        type: "number",
        name: "age",
        message: "Enter your age:"
    },
    {
        type: "input",
        name: "domicile",
        message: "Enter Your Domicile address:"
    },
    {
        type: "number",
        name: "Score",
        message: "Enter Your Score:"
    },
]);
if (jobApp.age < 30) {
    if (jobApp.domicile === "sindh") {
        if (jobApp.Score > 60) {
            console.log("Congratulations! You are selected for this job.");
        }
        else {
            console.log("Sorry! You are not selected for this job. Your Score is less than 60.");
        }
    }
    else {
        console.log("Sorry ! you are not selected for this job .Your domicile  is not sindh.");
    }
}
else {
    console.log("Sorry ! you are not selected for this job .Your age is greater than 30.");
}
