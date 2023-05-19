//1.depositing money
//2.collect bet amount
//3.how many lines to bet
//4.spin
//5 checking if user won
//6. give user the money
//7. play again


const prompt=require("prompt-sync")();

const rows=3;
const cols=3;

const symbols_count={
    A:2,
    B:4,
    C:6,
    D:8,
}

const symbol_value={
    A:5,
    B:4,
    C:3,
    D:2,
}


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

    
        const lines=prompt("Enter the number of lines you want to bet ");
        const numberoflines=parseFloat(lines);
        if(isNaN(numberoflines)|| numberoflines<=0 || numberoflines>3){
            console.log("Invalid number of lines, please try again :(");
        }else{
            return numberoflines;
        }}
};

const getbet=(balance)=>{
    while(true){

    
        const bet=prompt("Enter the amount you want to bet: ");
        const numberbet=parseFloat(bet);
        if(isNaN(numberbet)|| numberbet<=0 || numberbet>balance){
            console.log("Invalid,please try again :(");
        }else{
            return numberbet;
        }}

};
const spin=()=>{
    const symbols=[];
    for (const[symbol,count] of Object.entries(symbols_count)){
for(let i=0; i<count;i++){
    symbols.push(symbol);
}
    }
  const reels=[[],[],[]];
  for (let i=0;i<cols;i++){
    const reelsymbols=[...symbols];
    for(let j=0;j<rows;j++){
        const randomindex= Math.floor(Math.random()*reelsymbols.length);
        const selectedsymbol=reelsymbols[randomindex];
        reels[i].push(selectedsymbol);
        reelsymbols.splice(randomindex,1);
    }

  }
  return reels;


};
const transpose=(reels)=>{
    const rows1=[];
    for(let i=0;i<rows;i++){
        rows1.push([]);
        for(let j=0; j<cols;j++){
            rows1[i].push(reels[j][i])
        }
    }
    return rows1;
};
const printrows = (rows1)=> {
    for (const row of rows1){
        let rowstring="";
        for(const[i,symbol]of row.entries()){
            rowstring+=symbol
            if (i!=row.length-1){

            rowstring+="|"
            }
        }
        console.log(rowstring)
    }
};
const getwinning=(rows1,bet,lines)=>{
    let winnings=0;
    for(let row=0;row<lines;row++){
        const symbols=rows1[row];
        let allsame=true;
        for(const symbol of symbols){
            if(symbol!=symbols[0]){
                allsame=false;
                break;
            }

        }
        if(allsame){
            winnings+=bet*symbol_value[symbols[0]];
        }

    }
    return winnings;
}

const game=()=>{

let balance =deposit();
while(true){
    console.log("you have a balance of $"+balance);
const linesnumber=getlines();
const bet=getbet(balance);
balance-=bet*linesnumber;
const reels=spin();
const rows1= transpose(reels);
printrows(rows1);
const winnings=getwinning(rows1,bet,linesnumber);
balance+=winnings;
console.log("you won,$"+ winnings);
if(balance<=0){
    console.log("you are out of money");
    break;
}
const playagain=prompt("do you want to play again");
if(playagain!="y")break;}}
game()
