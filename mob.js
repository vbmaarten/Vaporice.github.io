$(window).resize(function(){
});


$( document ).ready(function() {

	$("blackness").click(closeDialog());

	$("#button1").click(function(){
		openDialog("HOI");
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {closeDialog();} 
	});
});

function openDialog(text){
	$("#blackness").css("visibility", "visible");
	$("#dialog").css("visibility", "visible");
}

function closeDialog(){	
	$("#blackness").css("visibility", "hidden");
	$("#dialog").css("visibility", "hidden");
}