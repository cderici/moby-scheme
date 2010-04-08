// Switching Control / Jump out-Back in

// These are for list processing
// load("../../base.js");
// load("../../types.js");
// load("../../kernel.js");
////////////////////////////////
load("../support.js");

/* Original scheme code:

(define (generate-one-element-at-a-time lst)
	(define (control-state return)
		(map 
			(lambda (element)
				(set! return (call/cc 
					(lambda (resume-here)
						(set! control-state resume-here)
						(return element)))))
			lst)
		(return 'fell-down))

	(lambda ()
		(call/cc control-state)))

(define generate-digit
	(generate-one-element-at-a-time '(0 1 2 3 4 5 6 7 8 9)))

(generate-digit)
(generate-digit)

should give
0
1


--- These should translate to JS code: ---


(for simplicity, I didn't use plt.Kernel.map)

function map(f, arglist){
	if(arglist.isEmpty()){
		return plt.types.Empty.EMPTY;
	}
		return plt.Kernel.cons(f(arglist.first()), map(f, arglist.rest()));
}


function generateOneElementAtATime(lst){

	function controlState(ret){
		map(function(element){
			ret = callCC(function(resumeHere)
				{controlState = resumeHere; 
				 return Continuation.apply(ret,element);});
				},lst);
		return Continuation.apply(ret,"fell-down");				
	}

	return function(){return callCC(controlState);};
}

var generateDigit = generateOneElementAtATime(plt.Kernel.list([1,2,3,4,5,6,7,8,9]));

--- After A-Normalization : ---

function map(f, arglist){
	if(arglist.isEmpty()){
		return plt.types.Empty.EMPTY;
	}
		var temp1 = f(arglist.first());
		var temp2 = map(f, arglist.rest());
		return plt.Kernel.cons(temp1, temp2);
}

function generateOneElementAtATime(lst){

	function controlState(ret){
		map(function(element){
			ret = callCC(function(resumeHere)
					{controlState = resumeHere; 
					 return Continuation.apply(ret,element);});
				},lst);
		return Continuation.apply(ret,"fell-down");				
	}

	return function(){return callCC(controlState);};
}

var generateDigit = generateOneElementAtATime(plt.Kernel.list([1,2,3,4,5,6,7,8,9]));

Which should then fragmented & annotated to the following code:
*/

var generateDigit = generateOneElementAtATime(plt.Kernel.list([1,2,3,4,5,6,7,8,9]));

function generateOneElementAtATime(lst){

	var controlState = function(ret){
		var newFrames = new FrameList(new ContinuationApplication_frame0(), null);
		ret = new Continuation(newFrames,null);
		// this is only for readability
		var func = function(element){
					// try{
					ret = Continuation.CWCC(function(resumeHere){
								controlState = resumeHere;
								return Continuation.apply(ret,element);
								});
					// }catch(sce){
					//	ret = sce;
					//	throw sce;
					// }
		};

		map(func , lst);
		
		return Continuation.apply(ret,"fell-down");
	};

	return function(){return Continuation.CWCC(controlState);};
}

function map(f, arglist){
	if(arglist.isEmpty()){
		return plt.types.Empty.EMPTY;
	}
	var temp1;
	try{
		temp1 = f(arglist.first());
	}catch(sce){
		sce.Extend(new map_frame0(f,arglist));
		throw sce;
	}
		return map1(temp1, f, arglist);
}

function map1(temp1, f, arglist){
	var temp2;
	try{
		temp2 = map(f, arglist.rest());
	}catch(sce){
		if(sce instanceof SaveContinuationException){
			sce.Extend(new map_frame1(temp1));
			throw sce;
		}
		throw sce;
	}
	return map2(temp1,temp2);
}

function map2(temp1,temp2){
	return plt.Kernel.cons(temp1,temp2);
}

var map_frame0 = function(f,arglist){
	this.f = f;
	this.arglist = arglist;
}

map_frame0.prototype = new ContinuationFrame();
map_frame0.prototype.Invoke = function(return_value) { return map1(return_value,this.f,this.arglist); }
map_frame0.prototype.toString = function() { return "[map_frame0]"; }

var map_frame1 = function(temp1){
	this.temp1 = temp1;
}

map_frame1.prototype = new ContinuationFrame();
map_frame1.prototype.Invoke = function(return_value) { return map2(this.temp1,return_value); }
map_frame1.prototype.toString = function() { return "[map_frame1]"; }


// testing

var test = function() {
/*
Continuation.EstablishInitialContinuation(function() { 
				return generateDigit();
			});
*/

    return Continuation.EstablishInitialContinuation(function() { 
				return generateDigit();
			});

}
