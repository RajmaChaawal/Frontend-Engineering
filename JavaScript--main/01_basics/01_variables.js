const accountId = 144553
let accountEmail = "rajmachaawal@google.com"
var accountPassword = "12345" //prefer not to use var because of block scope!
accountCity = "Jaipur" //not at all recommended but feasible!
let accountState; // output will be undefined!

console.log(accountId)
//accountID = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId+1, accountEmail, accountPassword, accountCity, accountState])