 $(document).ready(function() {

//Hover Over Basecamp Box
$("#basecamp").hover(function(){
      $("#headertext").hide();
      $("#basecamprollover").show();
});
$("#basecamp").mouseleave(function(){
    $("#basecamprollover").hide();
    $("#headertext").show();
});

//Hover Over HiRise Box
$("#highrise").hover(function(){
      $("#headertext").hide();
      $("#hiriserollover").show();
});
$("#highrise").mouseleave(function(){
    $("#hiriserollover").hide();
    $("#headertext").show();
});

//Hover Over Campfire Box
$("#campfire").hover(function(){
      $("#headertext").hide();
      $("#campfirerollover").show();
});
$("#campfire").mouseleave(function(){
    $("#campfirerollover").hide();
    $("#headertext").show();
});

//Hover Over Basecamp Box Arrow Appear
$("#basecamp").hover(function(){
      $("#leftarrow1").show();
});

$("#basecamp").mouseleave(function(){
    $("#leftarrow1").hide();
  });

//Hover Over Hirise Box Arrow Appear
$("#highrise").hover(function(){
      $("#leftarrow2").show();
});

$("#highrise").mouseleave(function(){
    $("#leftarrow2").hide();
  });

//Hover Over Campfire Box Arrow Appear
$("#campfire").hover(function(){
      $("#rightarrow").show();
});

$("#campfire").mouseleave(function(){
    $("#rightarrow").hide();
  });


});
  