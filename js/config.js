/**
*   config.remove_image_ajax_url must refere to a serverside script which 1. remove the image name from database 2. remove the image file from server
*/
var config = {
    remove_image_ajax_url: 'http://localhost/php7/xampp7_www/phpsandbox/test/remove.php',//by clicking x on preview images you can remove image both from server and preview section
    image_array_name: 'uploaded_images',//name of an array of files which will be sent to server for instance if you set the value of this property to 'uploaded_images' in php you can retrieve the image array like this $_POST['uploaded_images']
}
