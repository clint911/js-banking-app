class Bank {
    //ist thing that gets created immediately you instanciate the class
   constructor(balance) {
        this.balance = balance;
    }

    withdraw(amount) {
        //lets use a guard clause 
        if (this.balance  - amount <= 0) {
            console.log("You cannot withdraw more than you have");
            return 
        }


        this.balance += amount; 
        console.log('withdrew', `$${amount}`);
        console.log({balance: this.balance});
    }

    deposit(amount) {
        this.balance += amount;
        console.log('deposited', amount);
        console.log({balance: this.balance});
        
    }
}
//creating an object of the class
const qaziChecking = new Bank(100);
console.log(qaziChecking.balance);

//lets deposit some money 
qaziChecking.deposit(100);
console.log(qaziChecking.balance);


