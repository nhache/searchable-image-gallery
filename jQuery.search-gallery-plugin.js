(function($){

	$.fn.searchGallery = function(){

		$('.no-results').hide();
		$('.tags').hide();

		//search for words in images' alt attributes
		$('#search-term').submit(function(event){

			event.preventDefault();

			//define search term
			$search = $(this).find('input').val();
			
			//empty input field and stop focus
			$(this).find('input').val('');
			$(this).find('input').blur();
			$(this).find('button').blur();
			
			//split the search query into single terms
			var $searchterms = $search.split(' '); 
			var $searchterms_length = $searchterms.length;
			
			//hide image gallery
			$('#img-gallery img').hide();
			
			//define variable to count displayed images
			$counter = 0;

			//loop through images, checking for each searchterm
			$('#img-gallery img').each(function(){
				
				//assign variable
				$current_image = $(this);
				
				//get value of alt attribute
				$image_tags = $current_image.attr('alt'); 
				
				//check searchterm(s)
				$.each($searchterms, function(i, $term){
					if($image_tags.indexOf($term) > - 1){
						$current_image.show();
						$counter = $counter + 1;
					}//end if
				});//end array loop
			
			});//end img loop
			
			//decide display of error/reset elements
			if($counter < 1){
				$('.no-tags').hide();
				$('.no-results').show();
				$('.tags').hide();
			} else{
				$('.no-tags').hide();
				$('.no-results').hide();
				$('.tags').show().html($search + ' <span class="glyphicon glyphicon-remove"></span>');
			}

		});//end search term submit
	
		//reset image search
		$('.search-overview').on('click', '.tags', function(){
			$('#img-gallery img').show()
			$('.tags').hide();
			$('.no-tags').show();
		});
		
	}//end searchGallery

}(jQuery));
