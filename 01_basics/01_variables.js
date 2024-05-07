const accountid = 1234;
let accountEmail = "vishal@gmail.com"
var accountpass = 1234
accountCity = "nagpur"

//accountid = 2; //notallowed

accountEmail = "rishi@gmail.com"
accountpass = 2345
accountCity = "jaipur"

//console.log(accountid);
/*
pefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountid, accountEmail, accountpass, accountCity]);
