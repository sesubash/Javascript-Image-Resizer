// Subash selvaraj 2013
// http://subashflash.blogspot.com
// https://github.com/sesubash/Javascript-Image-Resizer
// targetwidth and targetheight are the dimensions of the rendering area
var ImageResizer = {

// clipping will work only in html5 supported browsers
clipImage:function (img, targetwidth, targetheight) {

          var srcwidth = $(img).width();
          var srcheight = $(img).height();

          var result = this.calculateHeightAndWidth(srcwidth, srcheight, targetwidth, targetheight);

          var left = Math.abs(result.targetleft);
          var top = Math.abs(result.targettop);

          $(img).css("width",result.width);
          $(img).css("height",result.height);
          $(img).css("clip","rect("+top+"px,"+(targetwidth+left)+"px,"+(targetheight+top)+"px,"+left+"px)");
          $(img).css("left","-=" + left + 'px');
          $(img).css("top","-=" + top + 'px');
      

   
},

 fixImage:function(img, targetwidth, targetheight) {

    var srcwidth = $(img).width();
    var srcheight = $(img).height();

    var result = this.calculateHeightAndWidth(srcwidth, srcheight, targetwidth, targetheight);

    var left = 0;//Math.abs(result.targetleft);
    var top = 0;//Math.abs(result.targettop);

    if (result.width > targetwidth) {
        $(img).css("width", targetwidth);
        $(img).css("height", "auto");
    }
    else {

        console.log("left" + $(img).css("left"));
        $(img).css("width", "auto");
        $(img).css("height", targetheight);
        var left = targetwidth - img.width;
        $(img).css("left", "+=" + (left / 2) + 'px');       
    }
   
},

 
// The result object returned has the following properties:
//     width: width to scale the image to
//     height: height to scale the image to
//     targetleft: position relative to the left edge of the target to center the image (can be negative when fLetterBox is false)
//     targettop: position relative to the top edge of the target to center the image (can be negative when fLetterBox is false)

 calculateHeightAndWidth : function (srcwidth, srcheight, targetwidth, targetheight) {

    var result = { width: 0, height: 0, fScaleToTargetWidth: true };

    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
        return result;
    }

    // scale to the target width
    var scaleX1 = targetwidth;
    var scaleY1 = (srcheight * targetwidth) / srcwidth;

    // scale to the target height
    var scaleX2 = (srcwidth * targetheight) / srcheight;
    var scaleY2 = targetheight;

    // now figure out which one we should use
    var fScaleOnWidth = (scaleX2 > targetwidth);
    if (fScaleOnWidth) {
        fScaleOnWidth = false;
    }
    else {
        fScaleOnWidth = true;
    }

    if (fScaleOnWidth) {
        result.width = Math.floor(scaleX1);
        result.height = Math.floor(scaleY1);
        result.fScaleToTargetWidth = true;
    }
    else {
        result.width = Math.floor(scaleX2);
        result.height = Math.floor(scaleY2);
        result.fScaleToTargetWidth = false;
    }
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);

    return result;
}


}
