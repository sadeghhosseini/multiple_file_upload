	$('#add').click(function() {
		var element_id = new Date().getTime();
		$('#dynamic-elements').append(`
				<div class="element" id="`+element_id+`">
					<input type="text" name="property_name_array[]" placeholder="key"></input>
					<input type="text" name="property_value_array[]" placeholder="value"></input>
					<span class="glyphicon glyphicon-remove remove-this-element" data-parent-id="`+element_id+`"></span>
				</div>
			`);
	});

	$('#dynamic-elements').on('click', 'span.remove-this-element', function() {
		console.log($(this).attr('data-parent-id'));
		var the_element_id = $(this).attr('data-parent-id');
		$('div.element#' + the_element_id).remove();
	});
