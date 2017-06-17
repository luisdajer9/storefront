var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "PureLife2016",
  database: "Bamazon"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  makeTable();
});


var show Table = function() {


  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    
    var tab = "\t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
    console.log("____________________________________________");

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].itemId + tab + res[i].productName + tab +
        res[i].departmentName + tab + res[i].price + tab + res[i].stockQuantity);
    }
    console.log("________________________________________");

    
    promptCustomer(res);
  });
};


var promptCustomer = function(res) {

  
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What would you like to purchase?"
  }]).then(function(val) {

    
    var correct = false;

    
    for (var i = 0; i < res.length; i++) {

      
      if (res[i].product_name === val.choice) {
        correct = true;
        var product = val.choice;
        var id = i;

        inquirer.prompt([{
          type: "input",
          name: "quantity",
          message: "How many would you like to buy?"
        }]).then(function(val) {

        
          if ((res[id].stockQuantity - val.quantity) > 0) {

          
            connection.query(
              "UPDATE products SET stock_quantity='" + (res[id].stockQuantity - val.quantity) +
              "' WHERE product_name='" + product + "'",
              function(err, res2) {
                if (err) {
                  throw err;
                }

              
                console.log("Produce Bought!");

              
                showTable();
              });
          }

          
          else {
            console.log("Not a Valid Selection!");
            promptCustomer(res);
          }
        });
      }
    
    }

  
    if (i === res.length && correct === false) {
      console.log("Not a Valid Selection");
      promptCustomer(res);
    }
  });
};