$(document).on('ready', function(){ 
	function trimAll(s) {
	// убирает все пробелы в строке s	
 		var r=/\s+/g;
  	return s.replace(r,'');
	}

	

	$('.drop-down-list ul li').click(function(event){
      	event.preventDefault();
        var target = $(this);
        target.toggleClass('active');

       //if (target.hasClass('active')) target.hasClass('active');
        //else (target.addClass('active'));     
      	

  });


  	
});