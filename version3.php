<?php

$network = $_GET['network'];

switch ($network) {
    case 'teads-ima':
        $doc = "teads_v2.html";
        break;

    case 'teads-vast':
        $doc = "teads_v2.html";
        break;

    case 'connatix-ima':
        $doc = "connatix_googima_v3.html";
        break;

    case 'connatix-vast':
        $doc = "connatix_vast_v3.html";
        break;    

    case 'nativo-ima':
        $doc = "nativo_googima_v3.html";
        break;

    case 'nativo-vast':
        $doc = "nativo_vast_v3.html";
        break;    
        
    case 'town-news':
        $doc = "townNews_v2.html";
        break;   

    case 'propel':
        $doc = "propel_v3.html";
        break;            
    
    default:
        die('Must Pass in a known Customer Value!');
        break;
}

?>
<!DOCTYPE html>
<html>
<body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Dynamic Ad Playback from JSON Playlist</h2>
				<hr>
			</div>
		</div>
		<div style="margin: 0 auto; width: 1200px;">
			<div style="width: 830px; padding: 15px; float: left; border-right:1px solid; height: 500px">
				<h2>This is A Sweet Article</h2>
				<p>Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

				<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.</p>

				<p>Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

				<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.</p>

				<p>Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

				<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.</p>
			</div>
			<div class="row" style="width: 320px; float: left; display: block; margin-left: 15px;">
				<img src="https://thevideoink.com/wp-content/uploads/2017/05/0HElsOBJFvK7JBPem.png" width="100%">
				<div class="col-md-6">	
					<?php include $doc; ?>
				</div>
			</div>
		</div>	
	</div>
</body>
</html>