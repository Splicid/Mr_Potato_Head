$(document).ready(function(){
	
	$("#out").click(function(){
	$("#mouth_image").toggle();
	
	})
	$("#in").click(function(){
		var color = ["Yellow", "Blue", "Green", "Black"]
	var random = Math.floor(Math.random() * color.length)
	
		$("body").css("background-color", color[random])
	})
	$("#keys").click(function(){
		$("#potato").toggleClass("jumpy")
	});

	
});
