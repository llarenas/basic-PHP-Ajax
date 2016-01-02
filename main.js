$('form.ajax').on('submit', function() {  ////form.ajax... ajax is the class of form in index

//console.log('Trigger');

	var that = $(this), //(this) means form class, ibutang sa that
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};

   that.find('[name]').each(function(index, value) { //that, pangitaun ang name sang mga inputbox

//console.log(value);
var that = $(this),
	name = that.attr('name'),
	value = that.val();

data[name] = value;


});

//console.log(data);
$.ajax({

	url: url,
	type: type,
	data: data,
	success: function(response) {


		console.log(response);
	}


});

return false;

});