function init() {

    function isEqual(x, y) {
	return plt.Kernel.equal_question_(x, y);
    }

    function cons(x, y) {
	return plt.Kernel.cons(x, y);
    }

    var empty = plt.types.Empty.EMPTY;
    var number = function(x) { return plt.types.Rational.makeInstance(x, 1); };
    var str = function(x) { return plt.types.String.makeInstance(x); };
    var symbol = plt.types.Symbol.makeInstance;

    var TRUE = plt.types.Logic.TRUE;
    var FALSE = plt.types.Logic.FALSE;

    var pinfo = get_dash_base_dash_pinfo(symbol("moby"));

    // run: string -> scheme-value
    // Evaluates the string and produces the evaluated scheme value.
    function run(aSource) {
	var namespace = new Namespace();
	var program = readSchemeExpressions(aSource);
	var compiledProgram = (program_dash__greaterthan_compiled_dash_program_slash_pinfo
			       (program, pinfo));
	var defns = compiled_dash_program_dash_defns(compiledProgram);
	var interFunc = compiled_dash_program_dash_toplevel_dash_exprs(compiledProgram);
	var runToplevel = namespace.eval(defns, interFunc);
	
	var result;				  
	runToplevel(function(val) { result = val;  });
	return result;
    }

    return new Test.Unit.Runner({
	    setup: function() {},
    
            teardown: function() {},
    
	    testSimpleDatum: function() {
		this.assert(isEqual(number(42), run("42")))
	    },

	    testSimpleConditionals: function() {
		this.assert("foo",
			    run("(if true \"foo\" \"bar\")"));
		this.assert("bar",
			    run("(if false \"foo\" \"bar\")"));
	    },

	    testSimpleFunctionDefinition: function() {
		this.assert(number(9),
			    run("(define (f x) (* x x))" +
				"(f 3)"));
			    
	    },
	testLambda: function() {
	    this.assert(number(25),
			run("((lambda (x) (* x x)) 5)"));
	},


	testDivisionByZero: function() {
	    plt.Kernel.lastLoc = undefined;
	    this.assertRaise("MobyRuntimeError",
			     function() { run("   (/ 1 0)")});
	    this.assert("offset=3 line=1 span=7 id=\"\"", plt.Kernel.lastLoc);
	},


	testHigherOrderFunction: function() {
	    this.assert(isEqual(cons(str("A"),
				     cons(str("B"),
					  cons(str("F"),
					       cons(str("X"),
						    cons(str("Y"), empty))))),
				run("(define (insert cmp elt l)"+
				    "  (cond"+
				    "    [(empty? l) (list elt)]"+
				    "    [(cons? l) (if (cmp elt (first l))"+
				    "                   (cons elt l)"+
				    "                   (cons (first l)"+
				    "                         (insert cmp elt (rest l))))]))"+
				    "(insert string<=? \"F\" '(\"A\" \"B\" \"X\" \"Y\"))")))
	},

		// Bug reported by Alex Kruckman
		testLambdaDefinition: function() {
		this.assert(isEqual(number(43),
				    run("(define add1 (lambda (x) (+ x 1)))" +
					"(add1 42)")));
	    },
	

	testOrmap: function() {
	    this.assert(isEqual(TRUE,
				run("(ormap (lambda (x) x) (list true))")));

 	    this.assert(isEqual(FALSE,
 				run("(ormap (lambda (x) x) (list))")));

 	    this.assert(isEqual(FALSE,
 				run("(ormap (lambda (x) x) (list false))")));

 	    this.assert(isEqual(TRUE,
 				run("(ormap (lambda (x) x) (list false true))")));

	},

	testAndmap: function() {
	    this.assert(isEqual(TRUE,
				run("(andmap (lambda (x) x) (list true))")));

	    this.assert(isEqual(TRUE,
				run("(andmap (lambda (x) x) (list))")));

	    this.assert(isEqual(FALSE,
				run("(andmap (lambda (x) x) (list false))")));

	    this.assert(isEqual(FALSE,
				run("(andmap (lambda (x) x) (list false true))")));

	    this.assert(isEqual(TRUE,
				run("(andmap (lambda (x) x) (list true true))")));

	},



	testBegin: function() {
		// normal behaviour
		this.assert(isEqual(TRUE,
			    run("(begin (+ 1 2) (+ 3 4) true)")));

		// non top-level definition
		this.assertRaise("MobySyntaxError",
				function () {
				 run("(begin (+ 1 2) (- 3 4) (define j 5) (* 2 3))")});

		// sequencial evaluation
		this.assert(number(3),
			    run("(define x 5)(define y 3)" +
				"(begin (set! x y) (set! y x) y)"));
		
	    },

	    testBoxMutation: function() {
		this.assert(number(2),
			    run("(define bx (box 5))" +
				"(begin (set-box! bx 2)" +
					"(unbox bx))"));
		this.assertRaise("MobyTypeError",
				function () {
				 run("(define bx (box 5))" +
				     "(begin (set-box! 2 bx)" +
					"(unbox bx))")});
	},

    testStructureMutators: function() {

		this.assert(number(9),
			    run("(define-struct str (a b c))" +
					"(define a-str (make-str 1 2 3))" +
				    "(set-str-b! a-str 9)" +
					"(str-b a-str)"));

		this.assertRaise("MobyRuntimeError",
				function () {
			    	  run("(define-struct str (a b c))" +
						  "(define a-str (make-str 1 2 3))" +
				    	  "(set-str-b! 9 a-str)" +
						  "(str-b a-str)")});

		// posns are immutable
		this.assertRaise("MobySyntaxError",
				function () {
			    	  run("(define a-posn (make-posn 1 3))" +
				    	  "(set-posn-x! a-posn 6)" +
						  "(posn-x a-posn)")});
    },

	testSet: function() {
		// normal behaviour
		this.assert("a",
			    run("(define x 5)" +
					"(set! x \"a\")" +
					"x"));
		
		// undefined top-level variable
		this.assertRaise("MobySyntaxError",
				function () {
				 run("(set! c 42)")});
		
		// function arguments are mutable
		this.assert(number(3),
		            run("(define (func x) (begin (set! x 3) x))" +
					"(func 42)"));
		
		// scoping
		this.assert(number(42),
				   run("(define a 42)" +
				       "(define (f x) " +
					 	"(local ((define a 3)) " +
					   		"(begin (set! a x) a)))" +
	      			   "(begin (f 21) a)"));
		
	}
});

}
