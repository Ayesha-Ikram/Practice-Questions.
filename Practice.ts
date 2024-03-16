import inquirer from "inquirer";



// ============= SQUARE==============
const square =await inquirer.prompt([
    {
       type:"number",
       name:"num",
       message:"Enter a number :"
    }
])
let result = (square.num)*(square.num);
console.log(`The Square of ${square.num} is ${result}`);


// =============CUBE==============
  const cube =await inquirer.prompt([
    {
        type:"number",
        name:"num",
        message:"Enter a number :"
    }
])

let c =(cube.num)*(cube.num)*(cube.num);
console.log(`The cube of ${cube.num} is ${c}.`);



// ==============POWER 4=============

const power4 = await inquirer.prompt([
    {
        type:"number",
        name:"num",
        message:"Enter a number :"

    }
])
let p=(power4.num)*(power4.num)*(power4.num)*(power4.num);
console.log(`The Power4 of ${(power4.num)} is ${p}`);




// ============BMI==============



const BMIcal =await inquirer.prompt([
    {
       type: "number",
       name:"weight",
       message:"Enter Weight :"
    },
    {
        type:"number",
        name:"height",
        message:"Enter height :"
    }
])
let BMI =BMIcal.weight/((BMIcal.height)*(BMIcal.height));
console.log(` Your BMI is ${BMI}.`);




// ================Car Speed =================

const speedcal = await inquirer.prompt([
    {
        type:'number',
        name:'distance',
        message:'Enter Distance in(km) :'
    },
    {
        type:'number',
        name:'time',
        message:'Enter Time in(hours) :' 
    }
])
 let speed =speedcal.distance/speedcal.time;
 console.log(`Your Calculated Car Speed is ${speed}`);
 

// =============CLI ===============

const calculator = await inquirer.prompt([
    {
        type:'number',
        name:'num',
        message:'Enter Number to generate table:'
    }
])
let i =0;
for(let i=1 ; i<=10 ; i++){
    let sum =i*calculator.num;
    console.log(calculator.num ,'x' , i , '=', sum);
}



// ===============List==================

const askitems =await inquirer.prompt([
    {
        type:"list",
        name:"Items",
        message:"Enter your Items:",
        choices:["Honey","sugar","Chocolate","Milk"]
    }
])
console.log(`Your Grocery Item List is ${askitems.Items}.`);

// ================Checkbox==============

const favColor = await inquirer.prompt([
    {
        type:"checkbox",
        name:"color",
        message:"Enter your Favorite Color :",
        choices:["red","black","blue","pink","grey","purple"]
    }
])
console.log('Your Favorite Color is', favColor.color);


// ============Confirm=============

const qualification = await inquirer.prompt([
    {
        type:"confirm",
        name:"qual",
        message:"Are you Graduate??"
    }
])
console.log("Your answer is ",qualification.qual );

if(qualification.qual === true){
    console.log("You can get Admission in Masters!")
}
else{
    console.log("You can't get Admission in Masters!");
    
}


//=============Password===========

const Password = await inquirer.prompt([
    {
        type:"password",
        name:"pass",
        message:"Enter Your Password:"
    }
])
console.log("Your Password is ", Password.pass);

