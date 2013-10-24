Javascript-Image-Resizer
========================

Javascript Plugin to resize image proportioanly and by clipping remaining area

usage
=====
html
-----
<img id="myImg" src="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash4/998768_552889338100709_2100506661_n.jpg" onLoad="resizeImage(this)"/>
<img id="clipImage" src="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash4/998768_552889338100709_2100506661_n.jpg" onLoad="clipImg(this)"/>

JavaScript
--------
function resizeImage(img){	
	ImageResizer.fixImage(img,215,217);
}

function clipImg(img){	
	ImageResizer.clipImage(img,215,217);
}
