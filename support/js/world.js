org.plt.WorldKernel = {};
(function() {
    
    var world;
    var worldListeners = [];
    
    function changeWorld(newWorld) {
	world = newWorld;
	notifyWorldListeners();
    }

    function notifyWorldListeners() {
	var i;
	for (i = 0; i < worldListeners.length; i++) {
	    worldListeners[i](world);
	}
    }
    
    function addWorldListener(aListener) {
	worldListeners.push(aListener);
    }
    


    org.plt.WorldKernel.bigBang = function(width, height, aWorld, handlers) {
	var i;
	for (i = 0; i < handlers.length; i++) {
	    handlers[i]();
	}

	addWorldListener(function (w) {
	    if (org.plt.world.config.onRedraw) {
		var canvas = 
		    window.document.getElementById("canvas");
		var context = 
		    canvas.getContext("2d");
		var aScene = 
		    org.plt.world.config.onRedraw(w);
		aScene.render(context,
			      0,
			      0);
	    }

	});
	changeWorld(aWorld);
    };



    // placeImage: image number number scene -> scene
    org.plt.WorldKernel.placeImage = function(picture, x, y, aScene) {
	return aScene.add(picture,
			  org.plt.types.NumberTower.toInteger(x),
			  org.plt.types.NumberTower.toInteger(y));
    };

    
    // emptyScene: number number -> scene
    org.plt.WorldKernel.emptyScene = function(width, height) {
	return new SceneImage(
	    org.plt.types.NumberTower.toInteger(width), 
	    org.plt.types.NumberTower.toInteger(height),
	    []);
    };


    // text: string number color -> TextImage
    org.plt.WorldKernel.text = function(aString, aSize, aColor) {
	return new TextImage
	(aString, 
	 org.plt.types.NumberTower.toInteger(aSize), 
	 aColor);
    };


    
    // SceneImage: primitive-number primitive-number (listof image) -> Scene
    function SceneImage(width, height, children) {
	this.width = width;
	this.height = height;
	this.children = children;
    }
    

    // add: image primitive-number primitive-number -> Scene
    SceneImage.prototype.add = function(anImage, x, y) {
	return new SceneImage(this.width, 
			      this.height,
			      this.children.concat([[anImage, x, y]]));
    };

    // render: 2d-context primitive-number primitive-number -> void
    SceneImage.prototype.render = function(ctx, x, y) {
	var i;
	var childImage, childX, childY;
	// Clear the scene.
	ctx.fillStyle = "white";
	ctx.fillRect(x, y, x + this.width, y + this.height);

	// Then ask every object to render itself.
	for(i = 0; i < this.children.length; i++) {
	    childImage = this.children[i][0];
	    childX = this.children[i][1];
	    childY = this.children[i][2];
	    childImage.render(ctx,
			      childX + x,
			      childY + y);
	}
    };

    
    function TextImage(msg, size, color) {
	this.msg = msg;
	this.size = size;
	this.color = color;
	this.font = "Verdana";
    }

    TextImage.prototype.render = function(ctx, x, y) {
	// Fixme: not quite right yet.
	if ('mozDrawText' in ctx) {
	    ctx.mozTextStyle=this.size+"pt "+this.font;
	    // Fix me: I don't quite know how to get the
	    // baseline right.
	    ctx.translate(x, y + this.size);
	    ctx.fillStyle = this.color;
	    ctx.mozDrawText(this.msg);
	} else {
	    ctx.font.color = this.color;
	    ctx.font.size = this.size + "px";
	    ctx.fillText(this.msg, x, y);
	}
    };
    


 
 

 
})();


org.plt.world = {};
org.plt.world.config = {
    // onRedraw: world -> scene
    onRedraw: false
};

org.plt.world.config.Kernel = {};
org.plt.world.config.Kernel.onRedraw = function(handler) {
    return function() {
	org.plt.world.config.onRedraw = handler;    
    };
};