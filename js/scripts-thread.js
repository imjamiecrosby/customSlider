var newThreadAnnotations = null;
var annotations = {};

$(document).ready(function() {
    
    newThreadAnnotations = JSON.parse(localStorage["annotations"]);

    
        
    
    head.load("js/annotorious.min.js", function(){
        anno.hideSelectionWidget();
        anno.setProperties({
                stroke: '#a3c450',
                stroke_width: '4',
                outline: '#eeeeee',
                hi_stroke: '#a3c450',
                hi_stroke_width: '4',
                
            });
        $('.annotatable-image-inline').each(function(i, e) {
            anno.makeAnnotatable(e);
            
        });
        
        var inlineImageSrc = Object.keys(newThreadAnnotations);
        for (var i = 0; i < inlineImageSrc.length; i++) {   
            var annotations = newThreadAnnotations[inlineImageSrc[i]];
            for(var j = 0; j < annotations.length; ++j){
                var a = annotations[j];
                a['editable'] = false;
                anno.addAnnotation(a);
                
                if(j == 0) anno.highlightAnnotation(a);
            }
        }
        
    
    });

    
});





/*
var newThreadAnnotations = null;
$(document).ready(function() {
    
    
    newThreadAnnotations = JSON.parse(localStorage["annotations"]);



    
    var inlineImageSrc = Object.keys(newThreadAnnotations);
        for (var i = 0; i < inlineImageSrc.length; i++) {   
            var img = $(document.createElement('img')) 
            var annotations = newThreadAnnotations[inlineImageSrc[i]];
            img.attr('src',inlineImageSrc[i]);
            img.attr('class','annotatable-image-inline');
            img.appendTo('#annotatable-inline');
        }
    
    
        head.load("js/annotorious.min.js", function(){
            $('.annotatable-image-inline').each(function(i, e) {
                anno.makeAnnotatable(e);
            });
            
            });
    
});
*/




