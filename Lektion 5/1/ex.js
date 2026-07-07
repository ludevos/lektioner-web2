// Ta classnamnet "description" och ändra texten till "Python"
$(".description").text("Python"); 


// Ta alla länkar med taggen <a> och ändra href-attributet till "https://jenseneducation.com/"
$("a").attr("href", "https://jenseneducation.com/"); 


// This is how you can change multiple CSS properties of an element using jQuery
$("#myDiv").css({
    "color": "red",
    "font-size": "20px",
    "background-color": "yellow"
});

$(document).ready(function() {
    // Ta bort alla <p> element som har klassen "remove-me"
    $("p.remove-me").remove();
});

// This is put in HTML <head> section to include jQuery and your custom script
<head>
    <script src="path/to/your/jquery.js"></script> 
    <script src="my_jq.js"></script>
</head>

























