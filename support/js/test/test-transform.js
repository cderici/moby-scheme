var isEqualFrameList = function(fL1, fL2){

	var frameList1 = fL1;
	var frameList2 = fL2;

	if(frameList1 == null && frameList2 == null) { return true;	} 
	else if(frameList1.length != frameList2.length) { return false; }

	while(frameList1 != null) {
		var first1 = frameList1.first;
		var first2 = frameList1.first;

		if(first1 != first2 || first1.continuation != first2.continuation) {
			return false;
		}

		frameList1 = frameList1.rest;
		frameList2 = frameList2.rest;
	}

	return true;
}

var isEqualContinuations = function(cont1, cont2){
	return isEqualFrameList(cont1.frames, cont2.frames);
};

var isEqualSCE = function(thunk, sce){
	try{
		thunk();
	} catch(e) {
		if (e.constructor != SaveContinuationException){
			return false;
		}
		
		return isEqualFrameList(e.new_frames, sce.new_frames) && isEqualFrameList(e.old_frames, sce.old_frames);
	}
};

var test_frame1 = function(){
};

test_frame1.prototype = new ContinuationFrame();
test_frame1.prototype.Invoke = function(return_value) { return "test_frame1 invoked" };
test_frame1.prototype.toString = function() { return "[test_frame1]"; };

var test_frame2 = function(){
};

test_frame2.prototype = new ContinuationFrame();
test_frame2.prototype.Invoke = function(return_value) { return "test_frame2 invoked" };
test_frame2.prototype.toString = function() { return "[test_frame2]"; };

var test_frame3 = function(){
};

test_frame3.prototype = new ContinuationFrame();
test_frame3.prototype.Invoke = function(return_value) { return "test_frame3 invoked" };
test_frame3.prototype.toString = function() { return "[test_frame3]"; };

function init() {

    return new Test.Unit.Runner({
	setup: function() {},
	teardown: function() {},

	testBeginUnwind: function() {
		this.assert(isEqualSCE(Continuation.BeginUnwind, new SaveContinuationException()));
	},

	testCWCC: function() {
		var receiver = function(){return 1;};

		var a = new SaveContinuationException();
		a.new_frames = new FrameList(new CWCC_frame0(receiver), a.new_frames);


		this.assert(isEqualSCE(function(){ return Continuation.CWCC(receiver);}, a));
	},
	
   });

}
