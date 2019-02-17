var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pass",
    database: "bamazon_db"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("=====CONNECTED TO BAMAZON======")
    startApp();
});

function startApp() {
    inquirer.prompt([
        {
         type: "input",
         name: "id",
         message: "Please enter the ID (1-10) of the item you would like to purchase"
        },
        {
         type: "input",
         name: "quantity",
         message: "Please enter the number of units you would like to purchase"
        }
    ]).then(function(resp){
        var idsearch = resp.id;
        var quantity = resp.quantity;
        order(idsearch, quantity);
    });
};

function order(id, quantity) {
    var query = connection.query(
        `SELECT stock, name, price FROM products WHERE ID=${id}`,
        function(err, resp) {
            if (err) throw (err);
            else if (resp[0].stock < quantity){
                console.log("Sorry! We do not have enough stock to fulfill this request, try again");
                console.log(`Current Stock: ${resp[0].stock}`)
                connection.end();
            }
            else {
                var name = resp[0].name;
                var price = resp[0].price;
                var newQuantity = resp[0].stock - quantity
                purchase(id, quantity, newQuantity, name, price);
            }
        }
    )
}

function purchase(id, quantity, newQuantity, name, price) {
    var totalCost = quantity * price
    console.log(`====THANK YOU FOR YOUR PURCHASE========`);
    console.log(`ITEM: ${name}`);
    console.log(`QUANTITY: ${quantity}`);
    console.log(`TOTAL COST: $${totalCost}`);
    
    //update SQL database with new quantity
    var query = connection.query(
        `UPDATE products SET ? WHERE ?`,
        [
            {
              stock: newQuantity
            },
            {
              id: id
            }
        ]
    )
    connection.end();
}