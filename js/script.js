$(document).ready(function() {
   
    function pizza(size, toppings, crust, total, orderNumber) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.total = total;
        this.orderNumber = orderNumber;
      }
  
  $('.order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var amountt=0;

   

    $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    $("#total").html(total);



    $('.add-btn').click(function() {
      var sizeOfPizza = $(".size option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      order = order + 1;
    
      amountt = amountt + total;


      var newPizza = new pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });
    $(".checkout-btn").click(function() {
        amountt = amountt + total;
        $(".amountt h3 span").html(amountt)
       var answer= prompt("get order delivered and have it hot at ksh @150 enter yes or no")
        if (answer =="yes") {var location=prompt("enter your location")
        alert("your order will get to you in a few minutes at " + location + "your total amount is " +(amountt + 150))}
   });
    
  });


  
});





  




