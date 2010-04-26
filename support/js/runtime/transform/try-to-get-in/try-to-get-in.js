load("../support.js");

// Translation of the function:
//
//	(define return false)
//
//	(+ 1 (call/cc 
//			(lambda (cont)
//					(set! return cont)
//					1))))
//	(return 22))
//
// The expected value should be 23.
//
// This should translate to the javascript code:
//
// var ret = false;
// var g = function() {
//		1 + callCC(function(cont) { 
//								ret = cont; 
//								return 1; });
// };
//
// var f = functiom() {
//		return Continuation.apply(ret, 22);
// };
//
// which should then be a-normalized to:
//
// var ret = false;
//
// var g = function(){
//	temp1 = callCC(function(cont) {
//								ret = cont;
//								return 1;});
//	return 1 + temp1;
// };
// 
// var f = function(){
//	return Continuation.apply(ret, 22);
// };
//
// which should then be annotated to the following code:

var ret = false;

var f = function() {
		return Continuation.apply(ret,22);
};

var g = function() {
    var temp1;
	try{
		temp1 = Continuation.CWCC(function(cont){
									ret = cont;
									return 1; });
	}catch(sce) {
	if (! (sce instanceof SaveContinuationException)) { 
	    throw sce; 
	}
	sce.Extend(new g_frame0());
	throw sce;
	}
	return 1 + temp1;
};

var g_frame0 = function() {
	ContinuationFrame.call(this);
};
g_frame0.prototype = new ContinuationFrame();
g_frame0.prototype.Invoke = function(return_value) { return 1 + return_value;};
g_frame0.prototype.toString = function() { return "[g_frame0]"; };

// Let's try to test this code.

var test = function() {
    Continuation.EstablishInitialContinuation(function() { return g(); });
    return Continuation.EstablishInitialContinuation(function() { return f(); });
}
