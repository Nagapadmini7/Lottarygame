//1.depositing money
//2.collect bet amount
//3.how many lines to bet
//4.spin
//5 checking if user won
//6. give user the money
//7. play again


const prompt=require("prompt-sync")();

const deposit=()=> {
    while(true){

    
const depositamount=prompt("Enter a deposit amount: ");
const numberamount=parseFloat(depositamount);
if(isNaN(numberamount)|| numberamount<=0){
    console.log("Invalid amount, please try again :(");
}else{
    return numberamount;
}}
};

const getlines=()=>{

    while(true){

    
        const lines=prompt("Enter a deposit amount: ");
        const numberoflines=parseFloat(lines);
        if(isNaN(numberoflines)|| numberoflines<=0 || numberoflines>3){
            console.log("Invalid number of lines, please try again :(");
        }else{
            return numberoflines;
        }}
};
const depositamount=deposit();
const linesnumber=getlines();