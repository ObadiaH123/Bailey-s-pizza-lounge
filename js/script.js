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
            price = 0;
            break;
        case ""
            
            break;
    
        default:
            break;
    }
});
