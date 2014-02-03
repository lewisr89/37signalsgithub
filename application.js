 $(document).ready(function() {
    	$("#basecamprollover").hide();
    	$("#hiriserollover").hide();
    	$("#campfirerollover").hide();
 

 $("#basecamp").hover(function(){
 $("#headertext").hide();
});

  $("#basecamp").mouseenter(function(){
    $("#basecamprollover").show();
});
    $("#basecamp").mouseleave(function(){
    $("#basecamprollover").hide();
});
    $("#basecamp").mouseleave(function(){
    $("#headertext").show();
});


  $("#highrise").hover(function(){
  $("#headertext").hide();
});

  $("#highrise").mouseenter(function(){
    $("#hiriserollover").show();
});
    $("#highrise").mouseleave(function(){
    $("#hiriserollover").hide();
});
    $("#highrise").mouseleave(function(){
    $("#headertext").show();
});


  $("#campfire").hover(function(){
  $("#headertext").hide();
});

  $("#campfire").mouseenter(function(){
    $("#campfirerollover").show();
});
    $("#campfire").mouseleave(function(){
    $("#campfirerollover").hide();
});
    $("#campfire").mouseleave(function(){
    $("#headertext").show();
});

 });


