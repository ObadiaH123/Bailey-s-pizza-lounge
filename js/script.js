// Business Logic
var price, crust_price, topping_price;
let total = 0;

function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
// User interface logic

// proceed button
$(document).ready(function() {
    $("button.proceed").click(function(event) {
        $("button.cancel").hide();
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function() {
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        switch (psize) {
            case "0":
                price = 0;
                break;
            case "large":
                price = 800;
                console.log(price);
                break;
            case "medium":
                price = 600;
                console.log("The price is " + price);
                break;
            case "small":
                price = 400;
                console.log(price);
            default:
                console.log("error");
        }
        switch (pcrust) {
            case "0":
                crust_price = 0;
                break;
            case "Crispy":
                crust_price = 120;
                break;
            case "Stuffed":
                crust_price = 80;
                break;
            case "Gluten-free":
                crust_price = 140;
                break;
            default:
                console.log("No price");
        }
        // var topping_value = ptopping.length * 0;
        if (psize == "large") {
            var topping_value = ptopping.length * 100;
        } else if (psize == "medium") {
            var topping_value = ptopping.length * 80;
        } else {
            var topping_value = ptopping.length * 50;
        }
        console.log("toppins value" + topping_value);

        if ((psize == "0") && (pcrust == "0")) {
            console.log("nothing selected");
            $("button.proceed").show();
            $("#information").show();
            $("div.choise").hide();
            alert("Please select pizza size and crust");
        } else {
            $("button.proceed").hide();
            $("#information").hide();
            $("div.choise").slideDown(1000);
        }

        total = price + crust_price + topping_value;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(ptopping.join(", "));
        $("#totals").html(total);

        // Add pizza button
        $("button.addPizza").click(function() {
            let pname = $(".name option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function() {
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(", "));
            switch (psize) {
                case "0":
                    price = 0;
                    break;
                case "large":
                    price = 800;
                    console.log(price);
                    break;
                case "medium":
                    price = 600;
                    console.log("The price is " + price);
                    break;
                case "small":
                    price = 400;
                    console.log(price);
                default:
                    console.log("error");
            }
            switch (pcrust) {
                case "0":
                    crust_price = 0;
                    break;
                case "Crispy":
                    crust_price = 120;
                    break;
                case "Stuffed":
                    crust_price = 80;
                    break;
                case "Gluten-free":
                    crust_price = 140;
                    break;
                default:
                    console.log("No price");
            }

            if (psize == "large") {
                var topping_value = ptopping.length * 100;
            } else if (psize == "medium") {
                var topping_value = ptopping.length * 80;
            } else {
                var topping_value = ptopping.length * 50;
            }

            console.log("toppins value" + topping_value);
            total = price + crust_price + topping_value;
            console.log(total);

            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);
            // constractor function
            var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

            $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
            console.log(newOrder);
        });
    });
});
