(function($){
	
	//Initialize our Plugin
	$.fn.tabs = function(){
		//Loop through all the possible tab areas
		return this.each(function(){
			//Make a variable for the tabs container
			var container = $(this);
			
			//Make all tabs clickable
			container.find(".tab-links a").on( "click", function(event){
			  event.preventDefault();
			  
			  //Grab the href attribute from whichever link was clicked
			  var tabID = $(this).attr("href");
			  
			  //Slide off old content, the slide on new content
			  container.find(tabID).siblings().slideUp(400);
			  container.find(tabID).delay(400).slideDown(400);

			  //Highlight the active tab
			  $(this).parent("li").addClass("active").siblings().removeClass("active");
			});
			//end of click code
		});
		
	}
	
	
})(jQuery);


//$("#container").tabs();


