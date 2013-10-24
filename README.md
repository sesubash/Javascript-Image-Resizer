Javascript-Image-Resizer
========================

Javascript Plugin to resize image proportioanly and by clipping remaining area


usage - html
------------

&lt;img id="myImg" src="url.jpg" onLoad="resizeImage(this)"&gt;
<br/>
&lt;img id="clipImage" src="url.jpg" onLoad="clipImg(this)"&gt;

JavaScript
--------
function resizeImage(img){	
	ImageResizer.fixImage(img,215,217);
}

function clipImg(img){	
	ImageResizer.clipImage(img,215,217);
}
