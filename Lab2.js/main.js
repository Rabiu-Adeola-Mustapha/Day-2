let age = 24
let status = false

if (age >=18 && status ==true){

    //console.log("Your vote is successfully casted");
 document.write("<h4>You vote is successfully casted</h4>")
}

else if ( age >=18 && status == false){

    //console.log("Error!Your have already casted your vote!");

    document.write("<h4>Error! You have already casted your vote!</h4>")
}

else{

    //console.log("Error! You are not eligible to vote wait toll you are 18!");
    document.write("<h4>Error! You are not eligible to vote wait till you are 18!</h4>")
}

console.log();


//let number1 = parseFloat(prompt('Enter first number: '));
//let number2 = parseFloat(prompt('Enter the second number: '));
//let operator = prompt('Enter operator ( either +, -, * or / ): 