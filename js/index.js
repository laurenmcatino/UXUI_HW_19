console.log("your index.js file is loaded correctly!");

$("#resumeButton").on("click", function(){
    $(this).html("Resume Downloaded!");
}
);

$(".wiyf").hover(
    function(){
        $(this).css("background-color", "orange");
        $(this).css("color", "rgb(160, 60, 60)");
    }, function() {
        $(this).css("background-color", "teal");
        $(this).css("color", "white");
    }
);

$(".globetrot").hover(
    function(){
        $(this).css("background-color", "orange");
        $(this).css("color", "rgb(160, 60, 60)");
    }, function() {
        $(this).css("background-color", "teal");
        $(this).css("color", "white");
    }
);

$(".deptofenergy").hover(
    function(){
        $(this).css("background-color", "orange");
        $(this).css("color", "rgb(160, 60, 60)");
    }, function() {
        $(this).css("background-color", "teal");
        $(this).css("color", "white");
    }
);

$(".plannedPethood").hover(
    function(){
        $(this).css("background-color", "orange");
        $(this).css("color", "rgb(160, 60, 60)");
    }, function() {
        $(this).css("background-color", "teal");
        $(this).css("color", "white");
    }
);