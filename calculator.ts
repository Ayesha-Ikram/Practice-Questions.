import inquirer from "inquirer";

const Cal = await inquirer.prompt([
    {
       type:"number",
       name:"firstNumber",
       message:"Enter First Number:" 
    },
    {
        type:"number",
        name:"secondNumber",
        message:"Enter second  Number:" 
    },
    {
        type:"list",
        name:"operators",
        message:"Which operator do you want to perform??",
        choices:["Addition","Subtraction","Multiplication","Divison"]
    }
])
//-----------Addition-------------
if(Cal.operators === "Addition"){
    console.log(`The Sum of ${Cal.firstNumber} and ${Cal.secondNumber} is ${Cal.firstNumber + Cal.secondNumber }`);
    }
//-----------Subtraction----------
if(Cal.operators === "Subtraction"){
    console.log(`The Difference of ${Cal.firstNumber} and ${Cal.secondNumber} is ${Cal.firstNumber - Cal.secondNumber }`);
    }
//-----------Multiplication--------
if(Cal.operators === "Multiplication"){
    console.log(`The Product of ${Cal.firstNumber} and ${Cal.secondNumber} is ${Cal.firstNumber * Cal.secondNumber }`);
}
//----------=Division---------------
if(Cal.operators === "Divison"){
    console.log(`The Quotient of ${Cal.firstNumber} and ${Cal.secondNumber}  is ${Cal.firstNumber / Cal.secondNumber }`);
    }