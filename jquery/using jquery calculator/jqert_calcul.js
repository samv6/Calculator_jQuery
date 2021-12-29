$(document).ready(function() {
    $("button").click(function() {
        var item1 = $(".first1").val();
        var item2 = $(".first2").val();
        var addTotal = parseInt(item1) + parseInt(item2);
        var subTotal = parseInt(item1) - parseInt(item2);
        $("li").eq(0).text("You enter 1st item is : " + item1)
        $("li").eq(1).text("You enter 2st item is : " + item2);
        $("li").eq(2).text("The total of both the item is : " + addTotal);
        $("li").eq(3).text("The total subtraction of both item is : " + subTotal);
    });
});