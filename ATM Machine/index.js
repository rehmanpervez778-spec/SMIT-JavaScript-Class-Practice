let ballance = 1000;
const correctPin = "1234";

let userpin = prompt("Enter your ATM PIN:");

if (userpin !== correctPin) {
    alert("Incorrect PIN!");
} else{ 
    let choice = prompt(
        "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" +
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +
        "4️⃣ Exit\n\n" +
        "Enter your choice (1-4):"
    );

 if (choice === "1") {
        alert("Your balance is: " + ballance);

 }else if (choice === "2") {
        let withdrawAmount = +prompt("Enter amount to withdraw:");
        if (withdrawAmount > ballance) {
            alert("Insufficient funds!");
        } else if (withdrawAmount <= 0) {
            alert("Invalid withdrawal amount!");
        } else {
            ballance = ballance - withdrawAmount;
            alert("Withdrawal successful! New balance:" + ballance);
        }
    } else if (choice === "3") {
        let depositAmount = +prompt("Enter amount to deposit:");
        if (depositAmount <= 0) {
            alert("Invalid deposit amount!");
        } else {
            ballance = ballance + depositAmount;
            alert("Deposit successful! New balance:" + ballance);
        }
        
    } else if (choice === "4") {
        alert("Thank you for using the ATM!");
    } else {
        alert("Invalid option!");
    }
    }


