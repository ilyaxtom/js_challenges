const {products} = require('./data.js')

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    return arr.reduce((acc, item) => acc + item.price, 0).toFixed(2);
}

console.log(total(products));