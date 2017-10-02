	function createImage(image_id, image_src) {
		var containerDiv = document.createElement('div');
		containerDiv.className = 'each-image-container';
		containerDiv.id = image_id;

		var imageNode = document.createElement('img');
		imageNode.src = image_src;
		imageNode.className = 'sadegh-preview';
		imageNode.style = 'max-width: 150px; max-height: 150px';

		var xspanNode = document.createElement('span');
		xspanNode.className = 'sadegh-close-preview';
		xspanNode.innerHTML = 'x';


		containerDiv.appendChild(imageNode);
		containerDiv.appendChild(xspanNode);

		return containerDiv;
	}

	function appendNode(imageNode) {
		var new_image_id = 'image' + Date.now();


		var wrapperLink = document.createElement('a');
		wrapperLink.dataset.lightbox = new_image_id;
		wrapperLink.href = imageNode.getElementsByTagName('img')[0].src;
		wrapperLink.appendChild(imageNode);

		$('#sadegh-image-preview-section').append(wrapperLink);
	}

	$(document).ready((function() {



	function readURL(input, new_image_id) {

		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				appendNode(createImage(new_image_id, e.target.result));
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

	function removeImage(image_id) {
		$('#sadegh-image-preview-section span #' + image_id).remove();
		$('#sadegh-upload-section input #' +  image_id).remove();
	}

	$('#sadegh-upload-section').on('change', '.sadegh-file-uploader' , function() {
		var new_image_id = 'image' + Date.now();
		readURL(this, new_image_id);
		$(this).attr('id', new_image_id);
		$('.sadegh-file-uploader').css('display', 'none');

		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('class', 'sadegh-file-uploader');
		element.setAttribute('name', config.image_array_name + '[]');
		$('#sadegh-upload-section').append(element);
		console.log('done');
	});

	$('#sadegh-image-preview-section').on('click', 'span.sadegh-close-preview', function() {
		console.log($(this).parent().attr('id'));
		removeImage($(this).parent().attr('id'));

		$('.each-image-container#' + $(this).parent().attr('id')).remove();
		$('#sadegh-upload-section input#' +  $(this).parent().attr('id')).remove();
	});

	/**imageModal**/
//	$('#sadegh-image-preview-section').on('click', 'img', function() {
//		console.log('logger');
//		var modalImage = document.createElement('img');
//		modalImage.src = $(this).attr('src');
//		modalImage.style.maxWidth = '100%';
//		modalImage.style.maxHeight = '100%';
//		modalImage.style.display = 'block';
//		modalImage.style.margin = 'auto';
//
//
//
//		$('.modal-body').html('');
//		$('.modal-body').append(modalImage);
//		$('#myModal').modal();
//
//	});
}));
