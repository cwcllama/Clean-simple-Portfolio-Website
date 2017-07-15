// wait until the document is ready


$(document).ready( function() {

	//have center item show, and move title upwards as user moves cursor towards them
   $('center:nth-child(1)').mouseenter(function() {

       $(this).animate({ height: '+=858px'

	   //delay the speed of the animation
	   },2000, function() {

			//show the writing from underneath the center image
			$('center:nth-child(2)').show({
		
       		});


		});

   });



  /* move logo upwards once user has mouse on logo
  		$('center:nth-child(2)').mouseenter(function() {
      		$(this).animate({ height: '+=858px'

	 //  delay the speed of the animation
        	 },2000,function(){
	
			});
	
	//	show the text by animating it back down
			$('center:nth-child(1)').animate({ height: '-858px'

			//delay the speed of the animation
			},2000,function(){

			});



			
   
   	 }); */

}); 


	
