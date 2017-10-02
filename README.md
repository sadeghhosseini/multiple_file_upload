# multiple_file_upload

1.
bower install #to install dependencies which are (jquery, bootstrap, lightbox2)

2. config the project in js/config.js file:
var config = {
    remove_image_ajax_url: 'http://localhost/php7/xampp7_www/phpsandbox/test/remove.php',//by clicking x on preview images you can remove image both from server and preview section
    image_array_name: 'uploaded_images',//name of an array of files which will be sent to server for instance if you set the value of this property to 'uploaded_images' in php you can retrieve the image array like this $_POST['uploaded_images']
}

3. after uploading and submitting the form, there will be an array sent to server-side with the name that you have specified in js/config.js(image_array_name)
so in php you can get the array like this:
$_POST['uploaded_images']#assuming you have left the value of config.image_array_name as what it is now.
