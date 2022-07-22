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

//connecting to our html buttons using the dom
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const amountInput = document.getElementById('amount');
const balanceDiv = document.getElementById('balance');

//adding listeners to the buttons
depositButton.onclick = () => {
    //note, onclick takes in an anonymous function
    const amount = Number(amountInput.value);
    qaziChecking.deposit(amount);
    balanceDiv.innerText = `Balance: ${qaziChecking.balance}`;
}

//withdrawButton
withdrawButton.onclick = () => {
    const amount = Number(amountInput.value);
    qaziChecking.withdraw(amount);
   balanceDiv.innerText = `Balance: ${qaziChecking.balance}` ;
}


