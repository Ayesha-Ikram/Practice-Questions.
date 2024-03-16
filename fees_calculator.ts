import inquirer from "inquirer";

const feesCal = await inquirer.prompt([
    {
        type:"list",
        name:"course",
        message:"You can select only one course at a time:",
        choices:["python","javascript","NextJs"]
    }
])

 if(feesCal.course === "python" ){
    console.log("Course: \"python\"");
    console.log("Fees: \"15,000/-\"");
    console.log("Timing: 03:00 PM");
}
else if(feesCal.course === "javascript" ){
    console.log("Course: \"javascript\"");
    console.log("Fees: \"12,000/-\"");
    console.log("Timing: 12:00 PM");
    }
else{
    console.log("Course: \"NextJs\"");
    console.log("Fees: \"20,000/-\"");
    console.log("Timing: 05:00 PM");
}