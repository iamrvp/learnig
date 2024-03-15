const accountId = 144553
let accountEmail = "rushipunde1998@gmail.com"
var accountPassword = "12345"
accountCity = "Latur"
let accountState;

// acoountId = 2 // not allowed

accountEmail = "punderushikesh0@gmail.com"
accountPassword = "779849"
accountCity = "Pune"

/*
not use var
because of issue of block scope and funcrtionnal scope
*/

console.log(accountId);
console.table({accountEmail, accountCity, accountId, accountPassword, accountState})
