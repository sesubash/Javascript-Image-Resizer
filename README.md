Javascript-Image-Resizer
========================

Javascript Plugin to resize image proportioanly and by clipping remaining area

usage
=====
html
-----
<img id="myImg" src="url.jpg" onLoad="resizeImage(this)"/>
<img id="clipImage" src="url.jpg" onLoad="clipImg(this)"/>

JavaScript
--------
function resizeImage(img){	
	ImageResizer.fixImage(img,215,217);
}

function clipImg(img){	
	ImageResizer.clipImage(img,215,217);
}
