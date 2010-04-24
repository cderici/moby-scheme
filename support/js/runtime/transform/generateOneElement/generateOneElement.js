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
(generate-digit)

should give
0
1
2

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

var generateDigit = generateOneElementAtATime(plt.Kernel.list([0,1,2,3,4,5,6,7,8,9]));

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

var generateDigit = generateOneElementAtATime(plt.Kernel.list([0,1,2,3,4,5,6,7,8,9]));

function f() {
	generateDigit();
	generateDigit();
	generateDigit();
}

Which should then fragmented & annotated to the following code:
*/

var f = function(){
	//alert("f");
	try{
		generateDigit();
	}catch(e){
		if(e instanceof SaveContinuationException){
			e.Extend(new f_frame0());
			//alert("throwing sce.Extend( f_frame0 )");
			throw e;
		}
		throw e;
	}
	return f_1();
}

var f_frame0 = function(){
}

f_frame0.prototype = new ContinuationFrame();
f_frame0.prototype.Invoke = function(return_value) { //alert("f_frame0 Invoke");
													return f_1(); }
f_frame0.prototype.toString = function() { return "[f_frame0]"; }

var f_1 = function(){
	try{
		//alert("f_1");
		generateDigit();
	}catch(e){
		if(e instanceof SaveContinuationException){
			e.Extend(new f_frame1());
			throw e;
		}
		throw e;
	}
	return generateDigit();
}

var f_frame1 = function(){
}

f_frame1.prototype = new ContinuationFrame();
f_frame1.prototype.Invoke = function(return_value) { return generateDigit(); }
f_frame1.prototype.toString = function() { return "[f_frame1]"; }



var generateDigit = generateOneElementAtATime(plt.Kernel.list([0,1,2,3,4,5,6,7,8,9]));

function generateOneElementAtATime(lst){

	var controlState = function(ret){		
		try{
			// this is only for readability
			var func = function(element){
						//alert("func -- element: " + element)
						try{
						ret = Continuation.CWCC(function(resumeHere){
												controlState = resumeHere;
												//alert("applying " + ret + " to element : " + element);
												return Continuation.apply(ret,element);
												});
						}catch(sce){
							if(!(sce instanceof SaveContinuationException)) {//alert("throwing not sce");
									throw sce;}
							sce.Extend(new func_frame0(element));
							//alert("throwing sce.Extend( func_frame0 )");
							throw sce;
						}
			};
			var func_frame0 = function(element){
				this.element = element;
			};

			func_frame0.prototype = new ContinuationFrame();
			func_frame0.prototype.Invoke = function(return_value) { 
				//alert("func_frame Invoke, return_value = " + return_value + "\nelement = " + this.element);
				ret = return_value;
				//alert("func_frame Invoke, returning element : " + this.element);
				//return this.element;
			};
			func_frame0.prototype.toString = function() { return "[func_frame0]"; };

			map(func , lst);
		} catch(e) {
			if(e instanceof SaveContinuationException) {
				e.Extend(new controlState_frame(ret));
				throw e;
			}
			throw e;
		}
		return Continuation.apply(ret,"fell-down");
	};

	var controlState_frame = function(ret){
		this.ret = ret;
	}

	controlState_frame.prototype = new ContinuationFrame();
	controlState_frame.prototype.Invoke = function(return_value) { return Continuation.apply(this.ret,"fell-down"); }
	controlState_frame.prototype.toString = function() { return "[controlState_frame]"; }

	return function(){
					//alert("generateDigit()");
					return Continuation.CWCC(controlState);};
}

function map(f, arglist){
	//alert("map");
	if(arglist.isEmpty()){
		return plt.types.Empty.EMPTY;
	}
	var temp1;
	try{
		temp1 = f(arglist.first());
	}catch(sce){
		if(sce instanceof SaveContinuationException) {
			sce.Extend(new map_frame0(f,arglist.rest()));
			//alert("throwing sce.Extend( map_frame0 )");
			throw sce;
		}
		throw sce;
	}
		return map1(temp1, f, arglist);
}

function map1(temp1, f, arglistrest){
	//alert("map1");
	var temp2;
	try{
		temp2 = map(f, arglistrest);
	}catch(sce){
		if(sce instanceof SaveContinuationException){
			sce.Extend(new map_frame1(temp1));
			//alert("throwing sce.Extend( map_frame1 )");
			throw sce;
		}
		throw sce;
	}
	return map2(temp1,temp2);
}

function map2(temp1,temp2){
	//alert("map2");
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
    return Continuation.EstablishInitialContinuation(function() { return f(); });
}
