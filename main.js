class Bank {


    //methods
    // withdraw(withdrawAmount) {
      //   if (withdrawAmount > this.currentBalance) {
        //     console.log("Insufficient balance in your account");
       // } else if (withdrawAmount <= this.currentBalance) {
         //return   currentBalance = currentBalance - withdrawAmount;
           // console.log(`You have withdrawn ${withdrawAmount}`);
        //} else {
          //  console.log("invalid operation. Do not try this again");
     //} 
     //}
//THis is my actual file 
    //lets create a simple withdraw methos that actually works
    
    //constructor to instanciate the balance
    constructor(balance) {
        this.balance = balance;
    }
    
    withdraw(withdrawAmount) { 
        //now that it works lets perform a couple of checks
        if (withdrawAmount <= this.currentBalance) {
        return this.currentBalance = this.currentBalance - withdrawAmount;
        } else if (withdrawAmount > this.currentBalance) {
            return console.log("Try a lower amount");
        } else {
            console.log("error, Operation not permitted");
        }

    }


    deposit(depositAmount) {
        return this.currentBalance = depositAmount;
    }
    
    getBalance() {
        return this.currentBalance;
    }
    
}

//creating a new object or instance of the class
let qazi = new Bank();
qazi.deposit(100000);
//let bankBalance = qazi.getBalance();
//console.log(bankBalance);

//lets try to withdraw
qazi.withdraw(200000);
let bankBalance = qazi.getBalance();
console.log(bankBalance);

/** introducing a front-end to our js file */
//lets start by adding an event listener to our code
let deposit_button = document.getElementById("deposit_button");
deposit_button.onclick = function(event) {
    console.log(event);
}






