/**
 * Created by Tobias on 07.05.2016.
 */
$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});