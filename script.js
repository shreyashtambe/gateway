function sendMoney() {
  var enterName = document.getElementById("enterName").value; //Receiver's name
  var enterAmount = parseInt(document.getElementById("enterAmount").value); //amount to send
  var enterSName = document.getElementById("enterSName").value; //Sender's name
  var findSenderBankAccount = enterSName + "BankBalance"; //This will make VaibhavBankBalance
  var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML); //Balance in Sender's account(passing VaibhavBankBalance id to enterSAmount variable)

  if (enterAmount > enterSAmount) {
    alert("Insufficient Balance.")
  }
  else {
    var findUserBankAccount = enterName + "BankBalance";  //will create RecieverBankBalance

    var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount; //finalAmount= previous balance+ recived amount

    //document referes to HTML document,getElementById("id").innerHTML is used almost every time you want to manipulate, or get info from, an element on your document.
    var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount; //VaibhavBankBalance- amount to send= myaccountBalance

    document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
    document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    alert(`Successful Transaction !!
         ₹${enterAmount} is sent to ${enterName}@gmail.com.`)

    // transaction history
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(`Rs. ₹${enterAmount} is sent from the sender with Email-id ${enterSName}@gmail.com
    to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
    createPTag.appendChild(textNode);
    
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}