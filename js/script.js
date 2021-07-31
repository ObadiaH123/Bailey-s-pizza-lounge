  // Business Logic
  var price, crust_price, topping_price;
  let total = 0;

  function pizzaName(name, size, crust, toppings,total) {
      this.name=name;
      this.size=size;
      this.crust=crust;
      this.toppings=toppings;
      this.total=total;
  }

//user interface logic
//the form
$(document).ready(function(){
    $("button.proceed").click(function(event){
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
            price = 1200;
            console.log(price);
            break;
        case "medium":
            price = 1000;
            console.log("The Price is " + price);
            break;
        case "Small":
            price = 700;
            console.log(price);
            break;
        default:
            console.log("error");
    
        default:
            break;
    }
    switch (pcrust) {
        case "0":
            crust_price = 0;
            break;
        case "Cripsy":
            crust_price = 150;
            break;
        case "Stuffed":
            crust_price = 100;
            break;
        case "Gluten-free":
            crust_price = 120;
            break;
    
        default:
            console.log("No price");
    }
    if(psize == "large"){
        var topping_value = ptopping.length *100;
    } else if (psize == "medium"){
        var topping_value = ptopping.length *80;
    } else {
        var topping_value = ptopping.length *50;
    }
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")) {
        console.log("nothing selected");
        $("button.continue").show();
        $("#tracking").show();
        $("div.choosed").hide();
        alert("Hello Customer select the pizza size and crust");
    } else {
        $("button.continue").hide
    }


});
