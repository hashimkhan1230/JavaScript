const accountId = 144356;
let  accountEmail = "HashimPathan@example.com";
var accountPassword = "HashimPathan@K123";
accountCity = "Pune";
let accountState; // Declared but not initialized

// accountId = 123456; const variable cannot be reassigned and will throw an error if uncommented
accountEmail = "hp.hp@com"
accountPassword= "NewPassword@123"
accountCity = "Mumbai"
  
  /*
   prefer not use the var keyword to declare variables as it has function scope and can lead to unexpected behaviors. Instead, use let and const for block scope and better code readability.
  */


console.table({accountId ,accountEmail, accountPassword, accountCity, accountState});
