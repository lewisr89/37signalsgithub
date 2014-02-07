 $(document).ready(function() {

//Hover Over Basecamp Box
$("#basecamp").hover(function(){
      $("#headertext").hide();
      $("#basecamprollover").show();
      $("#leftarrow1 img").show();

});
$("#basecamp").mouseleave(function(){
    $("#basecamprollover").hide();
    $("#headertext").show();
    $("#leftarrow1 img").hide();
});

//Hover Over HiRise Box
$("#highrise").hover(function(){
      $("#headertext").hide();
      $("#hiriserollover").show();
      $("#leftarrow2 img").show();
});
$("#highrise").mouseleave(function(){
    $("#hiriserollover").hide();
    $("#headertext").show();
    $("#leftarrow2 img").hide();
});

//Hover Over Campfire Box
$("#campfire").hover(function(){
      $("#headertext").hide();
      $("#campfirerollover").show();
      $("#rightarrow img").show();
});
$("#campfire").mouseleave(function(){
    $("#campfirerollover").hide();
    $("#headertext").show();
    $("#rightarrow img").hide();
});




});
  