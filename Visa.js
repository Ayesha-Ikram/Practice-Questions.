import inquirer from "inquirer";
const Confirmation = await inquirer.prompt([
    {
        type: "confirm",
        name: "passport",
        message: "do you have passport?"
    },
    {
        type: "confirm",
        name: "Vissa",
        message: "do you have Vissa?"
    },
]);
if (Confirmation.passport) {
    if (Confirmation.Vissa) {
        console.log("Congratulations! you can visit abroad :)");
    }
    else {
        console.log("Sorry you do not have Vissa.");
    }
}
else {
    console.log("Sorry you do not have Passport.");
}
