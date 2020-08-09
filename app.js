
$(document).ready(function() {
   
    $(".hamburger-icon").on("click", function() {
        $(this).toggleClass("active");
        $(".nav-links").toggleClass("active");
    })
    
});

