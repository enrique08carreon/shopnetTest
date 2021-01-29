get_all_data();


jQuery(document).on("click",".character-card",function(){
	var chapter = jQuery(this).attr("value")
	var card = jQuery(this).children().clone()
	get_chapter(chapter)
	jQuery("#card").html(card);

	jQuery(".block-complete-view").css("display","block")
})


	
	jQuery("#close").click(function(){
		jQuery(".block-complete-view").css("display","");	
		jQuery(".block-complete-view").children("#card").remove()
	});


jQuery(window).scroll(function() {
   if(jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height()) {
       var nextUrl = jQuery("#next").attr("value");
       get_all_data(nextUrl);
   }
});



