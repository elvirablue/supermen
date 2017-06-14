$(document).on('ready', function(){ 
	function trimAll(s) {
	// убирает все пробелы в строке s	
 		var r=/\s+/g;
  	return s.replace(r,'');
	}

	function outSum(elemSum, elemPrice, value) {
		var sum = value * trimAll(elemPrice.text());
    var str = sum.toString(10).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");      	
    elemSum.text(str);
	}

  function clickMin(tovar) {
        var val = $(tovar).find('.js-current').val();
        if (val === '' || val === '0') val = 0; else val --;
        $(tovar).find('.js-current').val(val);
        outSum($(tovar).find('.js-sum'), $(tovar).find('.js-price'), val);
        toPay();
  }

  function clickMax(tovar) {
        var val = $(tovar).find('.js-current').val();
        if (val === '') val = 1; else val ++;
        $(tovar).find('.js-current').val(val);
        outSum($(tovar).find('.js-sum'), $(tovar).find('.js-price'), val);
        toPay();
  }

  function toPay() {
    var result = 0;
    var int = 0;
    $('.js-sum').each(function(i,elem) {
      int = trimAll($(elem).text());
      result = +result + +int;
    });
    var str = result.toString(10).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
    $('.js-topay').text(str);
  }

	$('.js-tovar').click(function(event){
      	event.preventDefault();
        var target = $(this);
        if ($(event.target).hasClass('js-min')) clickMin($(this));
        if ($(event.target).hasClass('js-max')) clickMax($(this));       
      	$('.js-current').on('input', function () {
            var newValue = $(this).val();
            if (+newValue < 0 || !($.isNumeric(newValue))) {
              newValue = 0;
              $(this).val('0');
            }             
            newValue = parseInt(newValue, 10);
            $(this).val(newValue);
            outSum($(target).find('.js-sum'), $(target).find('.js-price'), newValue);
            toPay();
        });

  });


  	
});