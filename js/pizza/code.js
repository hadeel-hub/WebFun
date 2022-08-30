
function pizzaOven(bread,sause,cheeses, toppings){
var pizza={};
pizza.bread = bread;
pizza.sause= sause;
pizza.cheeses = cheeses;
pizza.toppings = toppings;
return pizza;
}
var p1 = pizzaOven("deep fish","traditional", ["mozzorella"],["pepperoni","sausage"])