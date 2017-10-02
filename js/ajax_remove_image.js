$(document).ready(function() {
	$('#sadegh-image-preview-section').on('click', 'span.sadegh-close-preview', function() {
		if (confirm('Are you sure?')) {
			var url = $('#close-address').val();
			var data = {
				'image_id': $(this).parent().attr('id'),
			};
			callback = function(response) {
			}
			$.post(url, data, callback);
		} else {
		}
	});
});
