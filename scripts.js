$(document).ready(function(){
  $('form.groceries').submit(function(event){
    event.preventDefault();

    var item1 = $('input#item1').val();
    var item2 = $('input#item2').val();
    var item3 = $('input#item3').val();
    var item4 = $('input#item4').val();
    var item5 = $('input#item5').val();

    var items = [item1, item2, item3, item4, item5]

    var sortedItems = items.sort();

    //["apple", "banana"]

    //foreach-----

    var uppercaseItems = [];

    sortedItems.forEach(function(sortedItem){
      uppercaseItems.push(sortedItem.toUpperCase());
    });

    //---------




    //map version - creates a new array

    var newArray = sortedItems.map(function(element){
      return element.toUpperCase();
    })


    //--------


    //
    // var item1 = $('input#item1').val();
    // var item2 = $('input#item2').val();
    // var item3 = $('input#item3').val();
    // var item4 = $('input#item4').val();
    // var item5 = $('input#item5').val();
    //
    // var groceryList = [item1, item2, item3, item4, item5]
    // console.log(groceryList);
    //
    // var groceryList = groceryList.map(function(item) {
    //   return groceryList.sort();
    // });
    //
    //   console.log(groceryList);
    //


  });
});
