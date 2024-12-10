const {products} = require('./data.js')

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    const result = arr.reduce((acc, item) => {
        return item.type === 'savory' ? acc + item.price : acc;
    }, 0);

    return result;
}

console.log(totalSavory(products));
